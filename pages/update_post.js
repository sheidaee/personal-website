import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { includeDefaultNamespaces } from '../services/api/utils';
// import EditPost from '../scenes/Admin/scenes/EditPost/EditPost';

class update_post extends Component {
  static async getInitialProps() {
    return {
      namespacesRequired: includeDefaultNamespaces(),
    };
  }

  render() {
    return <div />;
  }
}

export default update_post;
