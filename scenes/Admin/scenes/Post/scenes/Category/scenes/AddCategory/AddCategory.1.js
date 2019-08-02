import React, { useState, useRef, useEffect } from 'react';
import SortableTree, {
  getFlatDataFromTree,
  getTreeFromFlatData,
} from 'react-sortable-tree';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import isEqual from 'lodash/isEqual';

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

/* const UPDATE_POST_MUTATION = gql`
  mutation UPDATE_POST_MUTATION(
    $id: ID!
    $title: String!
    $description: String!
    $image: String
    $largeImage: String
  ) {
    updatePost(
      id: $id
      title: $title
      description: $description
      image: $image
      largeImage: $largeImage
    ) {
      id
      title
      description
      image
      largeImage
    }
  }
`; */

const treeDataHandler = data =>
  getTreeFromFlatData({
    flatData: data.map((node, i) => ({ ...node })), // ,
    getKey: node => node.id, // resolve a node's key
    getParentKey: node => node.parent, // resolve a node's parent's key
    rootKey: null, // The value of the parent key when there is no parent (i.e., at root level)
  });

const flatData = data =>
  getFlatDataFromTree({
    treeData: data,
    getNodeKey: ({ node }) => node.id, // This ensures your "id" properties are exported in the path
    ignoreCollapsed: false, // Makes sure you traverse every node in the tree, not just the visible ones
  }).map(({ node, path }, i) => ({
    id: node.id,
    name: node.title,
    order: node.order,
    newOrder: i,
    // The last entry in the path is this node's key
    // The second to last entry (accessed here) is the parent node's key
    parent: path.length > 1 ? path[path.length - 2] : null,
  }));

const AddCategory = () => {
  const [treeData, setTreeData] = useState();
  const modifiedNodes = useRef({});

  const prevTreeData = useRef();

  const changeHandler = changedTreeData => {
    setTreeData(changedTreeData);
    // console.log(flatData(changedTreeData));
    // console.log(flatData(prevTreeData.current));
  };

  const saveTreeHandler = () => {
    const currentFlatData = flatData(treeData);
    const prevFlatData = flatData(prevTreeData.current);

    console.log(currentFlatData, prevFlatData);

    Object.keys(prevFlatData).forEach(key => {
      if (prevFlatData[key]['parent'] !== currentFlatData[key]['parent']) {
        return;
      }

      console.log(prevFlatData[key], currentFlatData[key]);

      //console.log(prevFlatData[key], temp6[key])
    });
  };

  const moveNodeHandler = ({
    treeData: movedNodeTreeData,
    node: movedNode,
    prevPath,
    nextPath,
    prevTreeIndex,
    nextTreeIndex,
    nextParentNode,
  }) => {
    console.log({
      movedNodeTreeData,
      movedNode,
      prevTreeIndex,
      nextTreeIndex,
      nextParentNode,
      treeData,
    });
    console.log(isEqual(prevPath, nextPath));
    if (isEqual(prevPath, nextPath)) return;

    const prevTreeNodeId = prevTreeData.current[nextTreeIndex].id;
    console.log({ prev: prevTreeData.current });
    console.log({ next: flatData(treeData) });
    const nextTreeNodeId = prevTreeData.current[prevTreeIndex].id;
    const nextParentNodeId = nextParentNode ? nextParentNode.id : null;
    console.log(prevPath, nextPath);
    /* if (
      prevTreeIndex === nextTreeIndex &&
      nextParentNodeId === movedNode.parent
    ) {
      return;
    } */

    const movedNodesArr = [prevTreeNodeId, nextTreeNodeId];
    const modifiedNodesObj = { ...modifiedNodes.current };
    const parsedTreeData = flatData(treeData);
    parsedTreeData.forEach(treeNode => {
      if (movedNodesArr.includes(treeNode.id)) {
        // debugger;
        if (treeNode.id === nextTreeNodeId) {
          modifiedNodesObj[treeNode.id] = {
            ...treeNode,
            parent: nextParentNodeId,
          };

          //return;
        }

        modifiedNodesObj[treeNode.id] = treeNode;
      }
    });

    modifiedNodes.current = modifiedNodesObj;

    console.log(treeData, modifiedNodes.current);
  };

  return (
    <div style={{ height: 400 }}>
      <Query query={ALL_CATEGORY_QUERY}>
        {({ data, loading }) => {
          if (loading) return 'loading';
          if (!treeData) {
            const parsedTreeData = treeDataHandler(data.lists);
            setTreeData(parsedTreeData);
            prevTreeData.current = flatData(parsedTreeData);
            return 'loading';
          }

          return (
            <>
              <SortableTree
                treeData={treeData}
                onChange={changeHandler}
                onMoveNode={moveNodeHandler}
                generateNodeProps={rowInfo => ({
                  buttons: [
                    <button
                      className="btn btn-outline-success"
                      style={{
                        verticalAlign: 'middle',
                      }}
                      onClick={() => console.log(rowInfo)}
                    >
                      ℹ
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
            </>
          );
        }}
      </Query>
      <button onClick={saveTreeHandler}>save</button>
    </div>
  );
};
export default AddCategory;
