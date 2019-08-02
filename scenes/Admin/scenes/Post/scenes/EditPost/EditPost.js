import React from 'react';
import PropTypes from 'prop-types';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { withNamespaces } from '../../../../../../services/api/localization';
import DisplayError from '../../../../../../components/ui/DisplayError/DisplayError';

import { ALL_POSTS_QUERY } from '../../../../../User/scenes/Blog/Blog';
import PostForm from '../../components/PostForm/PostForm';

const SINGLE_POST_QUERY = gql`
  query SINGLE_POST_QUERY($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      description
      image
      largeImage
    }
  }
`;

const UPDATE_POST_MUTATION = gql`
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
`;

const EditPost = props => {
  const { id, t } = props;

  return (
    <Query query={SINGLE_POST_QUERY} variables={{ id }}>
      {({ data, queryError: postError, loading: postLoading }) => {
        const { post } = data;

        if (postError) return <DisplayError error={postError} />;
        if (postLoading) return <p>Loading...</p>;
        if (!data.post) return <p>No item found for {id}</p>;

        return (
          <Mutation
            mutation={UPDATE_POST_MUTATION}
            refetchQueries={[{ query: ALL_POSTS_QUERY }]}
          >
            {(updatePost, { error: updateError, loading: updateLoading }) => {
              const error = postError || updateError;
              const loading = postLoading || updateLoading;

              if (postLoading) {
                return 'loading...';
              }

              return (
                post && (
                  <PostForm
                    formTitle={t('form:edit_post')}
                    submitCallback={updatePost}
                    loading={loading}
                    error={error}
                    values={post}
                    submitButtonTitle={t('form:edit')}
                  />
                )
              );
            }}
          </Mutation>
        );
      }}
    </Query>
  );
};

EditPost.propTypes = {
  id: PropTypes.string.isRequired,
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(EditPost);
export { UPDATE_POST_MUTATION };
