import React from 'react';
import Welcome from '../scenes/User/scenes/Welcome/Welcome';
import { includeDefaultNamespaces } from '../services/api/utils';

class Home extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: includeDefaultNamespaces(['index']),
    };
  }

  render() {
    return <Welcome />;
  }
}
export default Home;
