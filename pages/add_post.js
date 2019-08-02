import React from 'react';
import { includeDefaultNamespaces } from '../services/api/utils';
import CreatePost from '../scenes/Admin/scenes/Post/scenes/CreatePost/CreatePost';

class AddPost extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: includeDefaultNamespaces(['form']),
    };
  }

  render() {
    return <CreatePost />;
  }
}
export default AddPost;
