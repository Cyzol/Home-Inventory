import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  box: {
    justifyContent: "center", //Centered vertically
    alignItems: "center", // Centered horizontally
    width: 180,
    height: 100,
    backgroundColor: "#6C63FF",
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: -1,
      height: 8,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4,
    elevation: 6,
    borderRadius: 25,
    margin: 5,
  },
});
