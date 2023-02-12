import { useQuery } from "@apollo/client"
// import { useState, useEffect } from "react"
import { GET_REPOSITORIES } from "../graphql/queries"

const useRepositories = () => {
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

  const { data, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  })
  // console.log("graphql get repos:", data, loading, error)

  return {
    repositories: data?.repositories,
    loading,
    // refetch: fetchRepositories,
  }
}

export default useRepositories
