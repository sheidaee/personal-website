import React, { useState, useRef, useEffect } from 'react';
import SortableTree, {
  getFlatDataFromTree,
  getTreeFromFlatData,
  addNodeUnderParent,
  changeNodeAtPath,
  removeNodeAtPath,
} from 'react-sortable-tree';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import isEqual from 'lodash/isEqual';
import orderBy from 'lodash/orderBy';

const initialData = [
  { id: '1', name: 'N1', parent: null },
  { id: '2', name: 'N2', parent: null },
  { id: '3', name: 'N3', parent: 2 },
  { id: '4', name: 'N4', parent: 3 },
];

const ALL_CATEGORY_QUERY = gql`
  query ALL_CATEGORY_QUERY {
    lists(where: { type: 1 }) {
      id
      title
      parent
      order
    }
  }
`;

const UPDATE_CATEGORY_MUTATION = gql`
  mutation UPDATE_CATEGORY_MUTATION(
    $id: ID!
    $title: String!
    $parent: String
    $description: String
    $image: String
    $slug: String
    $count: Int
    $order: Int
  ) {
    updateList(
      id: $id
      title: $title
      parent: $parent
      description: $description
      image: $image
      slug: $slug
      count: $count
      order: $order
    ) {
      id
      title
      parent
      description
      image
      slug
      count
      order
    }
  }
`;

const treeDataHandler = data =>
  getTreeFromFlatData({
    flatData: data.map(node => ({ ...node, treeIndex: node.order })), // ,
    getKey: node => node.id, // resolve a node's key
    getParentKey: node => node.parent, // resolve a node's parent's key
    rootKey: null, // The value of the parent key when there is no parent (i.e., at root level)
  });

const flatData = data =>
  getFlatDataFromTree({
    treeData: data,
    getNodeKey: ({ node }) => node.id, // This ensures your "id" properties are exported in the path
    ignoreCollapsed: false, // Makes sure you traverse every node in the tree, not just the visible ones
  }).map(({ node, path, treeIndex }) => ({
    id: node.id,
    name: node.title,
    treeIndex,
    // The last entry in the path is this node's key
    // The second to last entry (accessed here) is the parent node's key
    parent: path.length > 1 ? path[path.length - 2] : null,
  }));

const AddCategory = () => {
  const [treeData, setTreeData] = useState();
  const [addAsFirstChild, setAddAsFirstChild] = useState();
  const [newNode, setNewNode] = useState();
  const modifiedNodes = useRef({});
  const prevTreeData = useRef();

  const changeHandler = changedTreeData => setTreeData(changedTreeData);

  const normalizeArr = arr => {
    const obj = {};
    arr.forEach(node => (obj[node.id] = node));
    return obj;
  };

  const saveTreeHandler = updateList => {
    const oldTreeObj = normalizeArr(prevTreeData.current);
    const modifiedTreeObj = normalizeArr(flatData(treeData));

    Object.keys(modifiedTreeObj).forEach(nodeId => {
      if (isEqual(modifiedTreeObj[nodeId], oldTreeObj[nodeId])) {
        return;
      }

      modifiedNodes.current = {
        ...modifiedNodes.current,
        [nodeId]: modifiedTreeObj[nodeId],
      };
    });

    const currentModifiedNodes = modifiedNodes.current;
    Object.keys(currentModifiedNodes).forEach(async listId => {
      const listItem = currentModifiedNodes[listId];

      const { id, name: title, parent, treeIndex: order } = listItem;
      const res = await updateList({
        variables: {
          id,
          title,
          parent,
          order,
        },
      });
    });
  };

  const moveNodeHandler = ({
    prevPath,
    nextPath,
    prevTreeIndex,
    nextTreeIndex,
  }) => {
    if (isEqual(prevPath, nextPath)) return;

    const parsedTreeData = flatData(treeData);
    const prevTreeNodeId = parsedTreeData[nextTreeIndex].id;
    const nextTreeNodeId = parsedTreeData[prevTreeIndex].id;

    parsedTreeData.forEach(treeNode => {
      if (treeNode.id !== prevTreeNodeId && treeNode.id !== nextTreeNodeId) {
        return;
      }
      modifiedNodes.current = {
        ...modifiedNodes.current,
        [treeNode.id]: treeNode,
      };
    });
  };

  return (
    <div style={{ height: 400 }}>
      <Query query={ALL_CATEGORY_QUERY}>
        {({ data, loading }) => {
          if (loading) return 'loading';
          if (!treeData) {
            if (!data) return 'no result';

            const dataList = orderBy(data.lists, ['order'], ['asc']);

            const parsedTreeData = treeDataHandler(dataList);
            setTreeData(parsedTreeData);
            prevTreeData.current = flatData(parsedTreeData);
            return 'loading';
          }

          return (
            <>
              <Mutation mutation={UPDATE_CATEGORY_MUTATION}>
                {(
                  updateList,
                  { error: updateError, loading: updateLoading }
                ) => {
                  if (updateLoading) {
                    return 'loading...';
                  }

                  const getNodeKey = props => {
                    console.log(props);
                    const { treeIndex } = props;
                    // console.log(props);
                    return treeIndex;
                  };

                  return (
                    <>
                      <SortableTree
                        treeData={treeData}
                        onChange={changeHandler}
                        /* onMoveNode={moveNodeHandler} */
                        generateNodeProps={({ node, path }) => ({
                          title: !node.needsTitle ? (
                            node.title
                          ) : (
                            <form
                              onSubmit={event => {
                                event.preventDefault();
                                const {
                                  needsTitle,
                                  ...nodeWithoutNeedsTitle
                                } = node;

                                setTreeData(
                                  changeNodeAtPath({
                                    treeData,
                                    path,
                                    getNodeKey,
                                    newNode: nodeWithoutNeedsTitle,
                                  })
                                );
                              }}
                            >
                              <input
                                autoFocus
                                value={node.title}
                                onChange={event => {
                                  const title = event.target.value;

                                  setTreeData(
                                    changeNodeAtPath({
                                      treeData,
                                      path,
                                      getNodeKey,
                                      newNode: { ...node, title },
                                    })
                                  );
                                }}
                              />
                            </form>
                          ),
                          buttons: [
                            <button
                              className="btn"
                              id={
                                path.length === 1
                                  ? 'btn_add_parent'
                                  : 'btn_add_children'
                              }
                              onClick={() => {
                                setTreeData(
                                  addNodeUnderParent({
                                    treeData,
                                    parentKey: path[path.length - 1],
                                    expandParent: true,
                                    getNodeKey,
                                    newNode: {
                                      title: '',
                                      needsTitle: true,
                                    },
                                  }).treeData
                                );

                                console.log(treeData);
                              }}
                            >
                              {/* <img
                                src="/images/add.png"
                                alt="my image"
                                width="15"
                                height="15"
                              /> */}
                              add
                            </button>,
                            <button
                              onClick={() => {
                                console.log('ok');
                                /* setTreeData(state => ({
                                  treeData: removeNodeAtPath({
                                    treeData: state.treeData,
                                    path,
                                    getNodeKey,
                                  }),
                                })) */
                              }}
                            >
                              Remove
                            </button>,
                          ],
                        })}
                      />
                      <hr />
                      âThis flat data is generated from the modified tree dataâ
                      <ul>
                        {flatData(treeData).map(({ id, name, parent }) => (
                          <li key={id}>
                            id: {id}, name: {name}, parent: {parent || 'null'}
                          </li>
                        ))}
                      </ul>
                      <button onClick={() => saveTreeHandler(updateList)}>
                        save
                      </button>
                    </>
                  );
                }}
              </Mutation>
              ;
            </>
          );
        }}
      </Query>
    </div>
  );
};
export default AddCategory;
