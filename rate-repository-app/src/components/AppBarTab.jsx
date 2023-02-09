import { StyleSheet } from "react-native"
import { Link } from "react-router-native"
import Text from "./Text"

const styles = StyleSheet.create({
  tabTextColor: {
    color: "white",
    marginHorizontal: 10,
  },
})

const AppBarTab = ({ text, to }) => {
  return (
    <>
      <Link to={to}>
        <Text fontWeight="bold" style={styles.tabTextColor}>
          {text}
        </Text>
      </Link>
    </>
  )
}

export default AppBarTab
