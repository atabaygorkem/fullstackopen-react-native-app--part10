import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
import Constants from "expo-constants"

import { setContext } from "@apollo/client/link/context"
import { relayStylePagination } from "@apollo/client/utilities"

const httpLink = createHttpLink({
  uri: Constants.manifest.extra.APOLLO_URI,
})

//Configure cache to support cursor based pagination
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        repositories: relayStylePagination(),
      },
    },
    Repository: {
      fields: {
        reviews: relayStylePagination(),
      },
    },
    User: {
      //Me query's result is saved into the User field in the cache
      fields: {
        reviews: relayStylePagination(),
      },
    },
  },
})

const createApolloClient = (authStorage) => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      const accessToken = await authStorage.getAccessToken()
      console.log("createclient", accessToken)
      return {
        headers: {
          ...headers,
          authorization: accessToken ? `Bearer ${accessToken}` : "",
        },
      }
    } catch (e) {
      console.log(e)
      return { headers }
    }
  })

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache,
    // cache: new InMemoryCache(),
  })
}

export default createApolloClient
