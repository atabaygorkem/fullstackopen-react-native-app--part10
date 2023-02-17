import { useState } from "react"
import { FlatList, Pressable, View } from "react-native"
import { useNavigate } from "react-router-native"
import useRepositories from "../../hooks/useRepositories"
import { repositoriesQueryVariables } from "../../utils"
import ItemSeparator from "../ItemSeperator"
// import LoadingIndicator from "../LoadingIndicator"
import OrderMenu from "./OrderMenu"
import RepositoryItem from "./RepositoryItem"
import SearchBar from "./SearchBar"

// const repositories = [
//   {
//     id: "jaredpalmer.formik",
//     fullName: "jaredpalmer/formik",
//     description: "Build forms in React, without the tears",
//     language: "TypeScript",
//     forksCount: 1589,
//     stargazersCount: 21553,
//     ratingAverage: 88,
//     reviewCount: 4,
//     ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/4060187?v=4",
//   },
//   {
//     id: "rails.rails",
//     fullName: "rails/rails",
//     description: "Ruby on Rails",
//     language: "Ruby",
//     forksCount: 18349,
//     stargazersCount: 45377,
//     ratingAverage: 100,
//     reviewCount: 2,
//     ownerAvatarUrl: "https://avatars1.githubusercontent.com/u/4223?v=4",
//   },
//   {
//     id: "django.django",
//     fullName: "django/django",
//     description: "The Web framework for perfectionists with deadlines.",
//     language: "Python",
//     forksCount: 21015,
//     stargazersCount: 48496,
//     ratingAverage: 73,
//     reviewCount: 5,
//     ownerAvatarUrl: "https://avatars2.githubusercontent.com/u/27804?v=4",
//   },
//   {
//     id: "reduxjs.redux",
//     fullName: "reduxjs/redux",
//     description: "Predictable state container for JavaScript apps",
//     language: "TypeScript",
//     forksCount: 13902,
//     stargazersCount: 52869,
//     ratingAverage: 0,
//     reviewCount: 0,
//     ownerAvatarUrl: "https://avatars3.githubusercontent.com/u/13142323?v=4",
//   },
// ]

const RepositoryList = () => {
  const [searchKeyword, setSearchKeyword] = useState("")
  const [queryVariables, setQueryVariables] = useState(
    repositoriesQueryVariables.latest
  )

  const { repositories, fetchMore } = useRepositories({
    ...queryVariables,
    searchKeyword,
  })
  // if (loading) return <LoadingIndicator center />
  const navigate = useNavigate()

  function onEndReach() {
    fetchMore()
  }

  const renderItem = ({ item }) => (
    <Pressable onPress={() => navigate(`/repository/${item.id}`)}>
      <RepositoryItem item={item} />
    </Pressable>
  )
  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : []

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={
        <View style={{ flexDirection: "row", margin: 8 }}>
          <SearchBar setSearchKeyword={setSearchKeyword} />
          <OrderMenu setQueryVariables={setQueryVariables} />
        </View>
      }
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  )
}

export default RepositoryList
