import { StyleSheet, Dimensions } from "react-native";

const height = Dimensions.get('window').height;


export const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flex: 1,
  },

  navBox: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "transparent",
    paddingHorizontal: "5%",
    width: "100%",
    top: "4%",
    paddingTop: 0,
    zIndex: 2,
  },

  menu: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  textInputBox: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 17,
  },

  textInput: {
    width: "80%",
    fontWeight: "500",
  },

  iconBox: {
    width: 47,
    justifyContent: "center",
    alignItems: "center",
  },

  profBox: {
    flexDirection: "column",
  },

  setting: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
  },

  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  listBox: {
    position: "absolute",
    bottom: height / 8,
    width: "100%",
    paddingHorizontal: "5%",
  },
});
