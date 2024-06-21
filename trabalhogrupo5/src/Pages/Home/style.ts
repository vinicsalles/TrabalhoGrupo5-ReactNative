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
    backgroundColor: '#FF7E04',
  },

  welcome: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    fontWeight: '900'
  },

  textBox: {
    paddingLeft: 100,
    paddingRight: 100,
    marginRight: 0,
    marginLeft: 0,
  },

  buttonsBox: {
    marginTop: 40,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
});