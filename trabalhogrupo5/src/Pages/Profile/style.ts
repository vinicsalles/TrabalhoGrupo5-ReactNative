import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },

  background: {
    height: '100%',
    width: '100%',
    flex: 1,
    justifyContent: 'center',
  },

  title: {
    color: 'white',    
    textAlign: 'center',
    fontSize: 30,
    paddingTop:20,
    paddingLeft: 90,
    paddingRight: 90,
  },

  button: {
    alignContent: 'center',
    alignSelf: 'center',
    marginTop: 80,
  },
});