import React from 'react';
import Work from '../scenes/User/scenes/Work/Work';
import { includeDefaultNamespaces } from '../services/api/utils';

class WorkPage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: includeDefaultNamespaces(),
    };
  }

  render() {
    return <Work />;
  }
}
export default WorkPage;
