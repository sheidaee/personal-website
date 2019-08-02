import React from 'react';
import App, { Container } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import Page from '../scenes/Page/Page';
import { appWithTranslation } from '../services/api/localization';
import withApollo from '../services/api/graphql/withApollo';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-sortable-tree/style.css';
class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.query = ctx.query;

    return { pageProps };
  }

  render() {
    const { Component, pageProps, initialLanguage, apollo } = this.props;

    return (
      <Container>
        <ApolloProvider client={apollo}>
          <Page initLng={initialLanguage || 'en'}>
            <Component {...pageProps} />
          </Page>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApollo(appWithTranslation(MyApp));
