import { StyleSheet, View } from "react-native"
import { Navigate, Route, Routes } from "react-router-native"
import theme from "../theme"
import AppBar from "./AppBar"
import CreateReview from "./CreateReview"
import RepositoryList from "./RepositoryList"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import SingleRepository from "./SingleRepository"
import UserReviews from "./UserReviews"

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
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route
          path="/repository/:repoId"
          element={<SingleRepository />}
          exact
        />
        <Route path="/create/review" element={<CreateReview />} exact />
        <Route path="/user/reviews" element={<UserReviews />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />{" "}
        {/* for catching paths that don't match any path */}
      </Routes>
    </View>
  )
}

export default Main
