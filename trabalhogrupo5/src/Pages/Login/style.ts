import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },

  background: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FF7E04',
  },

  title: {
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
    fontWeight: '900'
  },

  button: {
    marginTop: 20,    
    width: 80,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 100,
    height: 80,
  },

  textButton: {
    padding: 2,
    marginBottom: -60,
    fontSize: 20,
    color: 'white',
  },
});