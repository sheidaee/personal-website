import withApollo from 'next-with-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { endpoint, prodEndpoint } from '../../../config';

function createClient({ headers }) {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
    request: operation => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
    // connectToDevTools: true,
    // local data
    // clientState: {
    //   resolvers: {
    //     Mutation: {},
    //   },
    //   defaults: {
    //     cartOpen: false,
    //   },
    // },
  });
}

export default withApollo(createClient);
