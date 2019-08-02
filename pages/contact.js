import React from 'react';
import Contact from '../scenes/User/scenes/Contact/Contact';
import { includeDefaultNamespaces } from '../services/api/utils';

class ContactPage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: includeDefaultNamespaces(),
    };
  }

  render() {
    return <Contact />;
  }
}
export default ContactPage;
