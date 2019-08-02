import React from 'react';
import PropTypes from 'prop-types';
import { includeDefaultNamespaces } from '../services/api/utils';
import EditPost from '../scenes/Admin/scenes/Post/scenes/EditPost/EditPost';

class UpdatePost extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: includeDefaultNamespaces(['form']),
    };
  }

  static propTypes = {
    query: PropTypes.object.isRequired,
  };

  render() {
    const { query } = this.props;

    return <EditPost id={query.id} />;
  }
}
export default UpdatePost;
