import React from 'react';
import About from '../scenes/User/scenes/About/About';
import { includeDefaultNamespaces } from '../services/api/utils';

class AboutPage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: includeDefaultNamespaces('about_page'),
    };
  }

  render() {
    return <About />;
  }
}
export default AboutPage;
