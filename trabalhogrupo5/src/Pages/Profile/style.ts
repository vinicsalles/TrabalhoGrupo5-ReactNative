
import { StyleSheet } from "react-native";

export const styled = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00264d',
    height: '100%',
    width: '100%',
  },

  background: {
    height: '100%',
    width: '100%',
    backgroundColor: '#00264d',
    alignItems: 'center'
  },

  title: {
    color: 'white',    
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },

  button: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
    width: '80%',
  },

  box: {
    backgroundColor:'#ffa500',
    borderRadius: 20,
    width: '75%',
    height: '35%',
    marginTop: '6%'
  },

  titleBox: {    
    textAlign: 'center',
    fontSize: 29,
    fontWeight: 'bold',
  },
});

