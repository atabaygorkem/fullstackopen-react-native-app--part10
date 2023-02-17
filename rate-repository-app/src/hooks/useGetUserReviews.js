import { useQuery } from "@apollo/client"
import { ME } from "../graphql/queries"

const useGetUserReviews = () => {
  const { data, fetchMore, loading, refetch, ...result } = useQuery(ME, {
    fetchPolicy: "cache-and-network",
    variables: {
      first: 5,
      includeReviews: true,
    },
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.me.reviews.pageInfo.hasNextPage
    console.log("1", canFetchMore)

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.me.reviews.pageInfo.endCursor,
        first: 3,
        includeReviews: true,
      },
    })
  }

  console.log("graphql get repos:", data, loading)
  return {
    me: data?.me,
    loading,
    fetchMore: handleFetchMore,
    refetch,
    ...result,
    // refetch: fetchRepositories,
  }
}

export default useGetUserReviews
