import React from 'react';
import Blog from '../scenes/User/scenes/Blog/Blog';
import { includeDefaultNamespaces } from '../services/api/utils';

class BlogPage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: includeDefaultNamespaces(),
    };
  }

  render() {
    return <Blog />;
  }
}
export default BlogPage;
