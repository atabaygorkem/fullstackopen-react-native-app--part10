import { Image, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  tinyLogo: {
    width: 50,
    height: 50,
  },
  flexItem: {
    flexGrow: 0,
    borderRadius: 10,
    // marginLeft: 26,
    // marginTop: 26,
  },
})

const Avatar = ({ avatarUrl }) => {
  return (
    <Image
      style={[styles.tinyLogo, styles.flexItem]}
      source={{ uri: avatarUrl }}
    />
  )
}

export default Avatar
