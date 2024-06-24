import { StyleSheet } from "react-native";
export const styled = StyleSheet.create({
  button: {
    width: "80%",
    paddingLeft: 50,
    justifyContent: "center",
    borderRadius: 40,
    height: 60,
    borderColor: 'grey',
    borderWidth: 1,
  },

  title: {
    alignSelf: 'center',
    fontSize: 20,
    color: "black",
    position: 'absolute',
    fontWeight: 'bold',
  },

  icon: {
    marginLeft: -25,
    width: "8%",
    resizeMode: "contain",
  },
});
