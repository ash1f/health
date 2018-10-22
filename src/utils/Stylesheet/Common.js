import { StyleSheet } from "react-native";

export const form = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: "center"
  },
  _text: {
    height: 60,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "rgb(189,195,199)",
    paddingHorizontal: 10
  }
});

export const btn = StyleSheet.create({
  _1: {
    paddingVertical: 5,
    borderRadius: 50,
    backgroundColor: "rgb(236, 27, 134)"
  },
  _1_text: {
    fontSize: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: "rgb(255, 255, 255)",
    textAlign: "center"
  }
});

export const layout = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#ffffff"
  }
});
