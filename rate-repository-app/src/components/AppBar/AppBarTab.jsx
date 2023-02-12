import { StyleSheet } from "react-native"
import { Link } from "react-router-native"
import Text from "../Text"

const styles = StyleSheet.create({
  tabTextColor: {
    color: "white",
    marginHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
  },
})

const AppBarTab = ({ text, to, ...props }) => {
  return (
    <>
      <Link to={to}>
        <Text fontWeight="bold" style={styles.tabTextColor} {...props}>
          {text}
        </Text>
      </Link>
    </>
  )
}

export default AppBarTab
