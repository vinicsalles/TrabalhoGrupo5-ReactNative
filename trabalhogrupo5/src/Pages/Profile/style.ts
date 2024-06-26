
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
    fontSize: 35,
    fontWeight: 'bold',
  },

  button: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 40,
    width: '80%',
  },

  box: {
    backgroundColor:'#FF7E04',
    marginTop: '3%',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#00264d',
    width: '65%',
  },

  titleBox: {    
    textAlign: 'center',
    fontSize: 27,
    fontWeight: 'bold',
    color: 'white'
  },

  textBox: {
    color: 'white',
    fontSize: 21,
    paddingLeft: 18,
    textAlign:'center',
    paddingTop:7,
    paddingBottom: 7
  },

  card: {
    width:'70%',
    height:'80%',
    backgroundColor: '#FF7E04',
    borderRadius: 25,
    alignItems:'center'
  },

  imageCard: {
    width: 200,
    height: 200
  },

  boxPerfil: {
    width: '65%',
    backgroundColor: '#00264d',
    borderRadius: 28
  }
});

