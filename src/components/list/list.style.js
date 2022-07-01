import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  listBox: {
    // backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 5,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 10,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  cardImg: {
    width: 90,
    height: 90,
  },

  textBox: {
    marginLeft: 15,
  },

  cardName: {
    fontSize: 17,
    fontWeight: "600",
  },

  subCardText: {
    // color: "#555555",
    marginTop: 7,
  },
});
