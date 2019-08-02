import React from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { withNamespaces } from '../../../../../../services/api/localization';
import PostForm from '../../components/PostForm/PostForm';
import { ALL_POSTS_QUERY } from '../../../../../User/scenes/Blog/Blog';

const CREATE_POST_MUTATION = gql`
  mutation CREATE_POST_MUTATION(
    $title: String!
    $description: String!
    $image: String
    $largeImage: String
  ) {
    createPost(
      title: $title
      description: $description
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

const CreatePost = props => {
  const { t } = props;

  return (
    <Mutation
      mutation={CREATE_POST_MUTATION}
      refetchQueries={[{ query: ALL_POSTS_QUERY }]}
    >
      {(createPost, { error, loading }) => (
        <PostForm
          formTitle={t('form:add_post')}
          submitCallback={createPost}
          loading={loading}
          error={error}
          submitButtonTitle={t('form:add_post')}
        />
      )}
    </Mutation>
  );
};

CreatePost.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withNamespaces()(CreatePost);
export { CREATE_POST_MUTATION };
