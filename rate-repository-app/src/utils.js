export const numToFixedStr = (num) => {
  if (isNaN(+num)) return "0"
  return +num > 1000 ? (+num / 1000).toFixed(1) + "k" : `${num}`
}

export const repositoriesQueryVariables = {
  latest: {
    orderBy: "CREATED_AT",
    orderDirection: "DESC",
    searchKeyword: "",
  },
  highestRated: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "DESC",
    searchKeyword: "",
  },
  lowestRated: {
    orderBy: "RATING_AVERAGE",
    orderDirection: "ASC",
    searchKeyword: "",
  },
}
