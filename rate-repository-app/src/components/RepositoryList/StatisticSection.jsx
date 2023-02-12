import { StyleSheet, View } from "react-native"
import theme from "../../theme"
import { numToFixedStr } from "../../utils"
import Text from "../Text"

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // alignContent: "center",
    marginBottom: 16,
  },
  statisticItem: {
    marginHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  colors: {
    backgroundColor: "white",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
})

const StatisticSection = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.statisticItem}>
        <Text>{numToFixedStr(item.stargazersCount)}</Text>
        <Text style={styles.colorTextSecondary}>Stars</Text>
      </View>
      <View style={styles.statisticItem}>
        <Text>{numToFixedStr(item.forksCount)}</Text>
        <Text style={styles.colorTextSecondary}>Forks</Text>
      </View>
      <View style={styles.statisticItem}>
        <Text>{numToFixedStr(item.reviewCount)}</Text>
        <Text style={styles.colorTextSecondary}>Reviews</Text>
      </View>
      <View style={styles.statisticItem}>
        <Text> {numToFixedStr(item.ratingAverage)}</Text>
        <Text style={styles.colorTextSecondary}>Rating</Text>
      </View>
    </View>
  )
}

export default StatisticSection
