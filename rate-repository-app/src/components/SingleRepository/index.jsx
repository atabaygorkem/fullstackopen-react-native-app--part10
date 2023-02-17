import { useQuery } from "@apollo/client"
import { FlatList } from "react-native"
import { useParams } from "react-router-native"
import { GET_REPOSITORY, GET_REVIEWS } from "../../graphql/queries"
import ItemSeparator from "../ItemSeperator"
import LoadingIndicator from "../LoadingIndicator"
import RepositoryItem from "../RepositoryList/RepositoryItem"
import ReviewItem from "./ReviewItem"

const SingleRepository = () => {
  const { repoId } = useParams()
  const { data: repoData, loading: loadingRepo } = useQuery(GET_REPOSITORY, {
    variables: { repositoryId: repoId },
    fetchPolicy: "cache-and-network",
  })
  const {
    data: reviewData,
    loading: loadingReviews,
    fetchMore,
  } = useQuery(GET_REVIEWS, {
    variables: { repositoryId: repoId },
    fetchPolicy: "cache-and-network",
  })

  const handleFetchMore = () => {
    // console.log("1", reviewData)
    const canFetchMore =
      !loadingReviews && reviewData?.repository.reviews.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: reviewData.repository.reviews.pageInfo.endCursor,
        repositoryId: repoId,
      },
    })
  }

  if (loadingRepo) return <LoadingIndicator center />
  if (loadingReviews) return <LoadingIndicator center />
  console.log(reviewData)

  // Get the nodes from the edges array
  const reviewNodes = reviewData
    ? reviewData.repository.reviews.edges.map((edge) => edge.node)
    : []

  return (
    <>
      <FlatList
        data={reviewNodes}
        renderItem={({ item }) => <ReviewItem review={item} />}
        ListHeaderComponent={() => (
          <>
            <RepositoryItem item={repoData.repository} button />
            <ItemSeparator />
          </>
        )}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={({ id }) => id}
        onEndReached={handleFetchMore}
        onEndReachedThreshold={0.5}
      />
    </>
  )
}

export default SingleRepository
