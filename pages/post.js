import React from 'react';
import PropTypes from 'prop-types';
import SinglePost from '../scenes/User/scenes/SinglePost/SinglePost';
import { includeDefaultNamespaces } from '../services/api/utils';

class PostPage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: includeDefaultNamespaces(),
    };
  }

  static propTypes = {
    query: PropTypes.object.isRequired,
  };

  render() {
    const { query } = this.props;

    return <SinglePost id={query.id} />;
  }
}
export default PostPage;
