import React from 'react';
import { includeDefaultNamespaces } from '../../services/api/utils';
import AddCategory from '../../scenes/Admin/scenes/Post/scenes/Category/scenes/AddCategory/AddCategory';

class AddCat extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: includeDefaultNamespaces(['form']),
    };
  }

  render() {
    return <AddCategory />;
  }
}
export default AddCat;
