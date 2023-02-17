import { FlatList } from "react-native"
import useGetUserReviews from "../../hooks/useGetUserReviews"
import ItemSeparator from "../ItemSeperator"
import UserReviewItem from "./UserReviewItem"

const UserReviews = () => {
  const { me, fetchMore, refetch } = useGetUserReviews()

  function onEndReach() {
    fetchMore()
  }

  const reviewNodes = me ? me.reviews.edges.map((edge) => edge.node) : []
  console.log("revNodes: ", reviewNodes)
  console.log("rev", me)

  return (
    <FlatList
      data={reviewNodes}
      renderItem={({ item }) => (
        <UserReviewItem review={item} refetch={refetch} />
      )}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default UserReviews
