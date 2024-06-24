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
    width: '100%',
    height: '100%',
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },

  title: {
    fontSize: 35,
    textAlign: 'center',
    color: 'white',
    fontWeight: '900'
  },

  forgot: {
    alignSelf: 'flex-start',
    marginLeft: 60,
    fontSize: 15,
    textAlign: 'center',
    color: 'blue',
    fontWeight: '400'
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