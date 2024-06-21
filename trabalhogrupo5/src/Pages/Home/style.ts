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

  welcome: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    fontWeight: '900'
  },

  shadows: {
    fontSize: 23,
    textAlign: 'center',
    color: 'white',
    fontWeight: '700'
  },

  demons: {
    fontSize: 10,
    textAlign: 'center',
    color: 'white',
    fontWeight: '300'
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