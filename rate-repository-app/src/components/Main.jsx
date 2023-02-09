import { StyleSheet, View } from "react-native"
import { Navigate, Route, Routes } from "react-router-native"
import theme from "../theme"
import AppBar from "./AppBar"
import RepositoryList from "./RepositoryList"
import SignIn from "./SignIn"

const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    display: "flex",
    flexGrow: 1,
    flexShrink: 1,
    flexDirection: "column",
    fontFamily: theme.fonts.main,
  },
  colors: {
    backgroundColor: theme.colors.mainBg,
  },
})

const Main = () => {
  return (
    <View style={[styles.container, styles.colors]}>
      <AppBar />
      {/* <Text>Rate Repository Application</Text> */}
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />{" "}
        {/* for catching paths that don't match any path */}
      </Routes>
    </View>
  )
}

export default Main
