import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  containerTitle: {
    flex: 0.2,
    right: 40,
  },
  infobox: {
    flexDirection: "row",
    backgroundColor: "#6C63FF",
    width: "100%",
    height: 200,
  },
  qrcode: {
    justifyContent: "center",
    width: "33%",
  },
  descriptionBox: {
    width: "65%",
  },
  place: {
    color: "#F2F7FD",
    padding: 10,
  },
  infoBox: {
    color: "black",
    padding: 20,
    textAlign: "center",
    fontSize: 20,
  },
  flatList: {
    width: "100%",
    marginTop: 10,
    textAlign: "center",
  },
  itemsBox: {
    backgroundColor: "white",
    width: "70%",
    marginTop: -15,
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 2,
  },
  info: {
    color: "#F2F7FD",
    fontSize: 20,
    paddingTop: 20,
    paddingLeft: 10,
  },
  listItemsContainer: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
    marginTop: -20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  deleteButton: {
    marginTop: 15,
    padding: 5,
    backgroundColor: "#F2F7FD",
    marginLeft: 10,
    width: "40%",
    borderRadius: 10,
  },
  deleteButtonFont: {
    color: "#D62525",
    textAlign: "center",
  },
  scrollView: {
    flex: 0.5,
    width: 245,
  },
  item: {
    padding: 10,
    backgroundColor: "#FEFEFE",
    borderRadius: 25,
    paddingLeft: 20,
    marginBottom: 10,
    textAlign: "center",
    alignItems: "center",
  },
  itemText: {
    textTransform: "uppercase",
    color: "black",
  },
});
