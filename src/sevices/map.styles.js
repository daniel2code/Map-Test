import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    position: "relative",
  },

  content: {
    position: "absolute",
    height: height,
    width: "100%",
  },
});
