import { StyleSheet } from "react-native";
export const styled = StyleSheet.create({
  button: { 
    width: "80%",
    height: 50,

    borderColor: 'grey',
    borderRadius: 40,
    borderWidth: 1,

    justifyContent: "center",
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  icon: {
    marginRight: 20,
    width: "8%",
    resizeMode: "contain",
  },

  bContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    alignSelf: 'center',
    
    width: '70%',
    height: '80%',
  }
});
