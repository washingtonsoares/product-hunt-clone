import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { relayStylePagination } from "@apollo/client/utilities";
import { ThemeProvider } from 'styled-components';
import { theme } from './core/theme';
import GlobalStyles from './core/theme/GlobalStyles';
import Routes from './Routes';

const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

const client = new ApolloClient({
  uri: 'https://api.producthunt.com/v2/api/graphql',
  headers: {
    'Authorization': `Bearer ${accessToken}`
  },
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          posts: relayStylePagination(['order']),
        },
      },
    },
  })
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
