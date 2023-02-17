import { useQuery } from "@apollo/client"
import { GET_REPOSITORIES } from "../graphql/queries"

const useRepositories = (variables) => {
  // const [repositories, setRepositories] = useState()
  // const [loading, setLoading] = useState(false)

  // const fetchRepositories = async () => {
  // setLoading(true)
  // const response = await fetch("http://192.168.1.107:5000/api/repositories")
  // const json = await response.json()
  // console.log(json)
  // setLoading(false)
  // setRepositories(json)
  // }

  // useEffect(() => {
  //   fetchRepositories()
  // }, [])

  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    // fetchPolicy: "cache-first",
    // fetchPolicy: "network-only",
    variables,
  })

  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage

    if (!canFetchMore) {
      return
    }

    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    })
  }

  console.log("graphql get repos:", data, loading)
  return {
    repositories: data?.repositories,
    loading,
    fetchMore: handleFetchMore,
    ...result,
    // refetch: fetchRepositories,
  }
}

export default useRepositories
