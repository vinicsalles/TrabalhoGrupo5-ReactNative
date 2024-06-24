import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },

  containerViewContador: {
    alignItems: 'center',
    flexDirection: 'row',
    color: 'white',
    height: 80,
    width: '100%',
    backgroundColor: "#003452",
    display: "flex",
  },

  contador: {
    marginLeft: 40,
    display: 'flex',
    flexDirection: 'row',
  },

  liquidacao: {
    fontSize:20,
    marginRight:60,
    fontWeight: 'bold',
    textAlignVertical: 'center',
    marginLeft: 20,
    color: 'white',
    display: "flex",
  },

  sale: {
    width: '100%',
    height: 359,
    resizeMode: 'contain',
  },



});

export default styles;
