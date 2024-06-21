import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  background: {
    height: '100%',
    width: '100%',
    backgroundColor: '#FF7E04',
  },

  title: {
    color: 'white',    
    textAlign: 'center',
    fontSize: 30,
  },

  button: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 80,
    width: '80%'
  },
});