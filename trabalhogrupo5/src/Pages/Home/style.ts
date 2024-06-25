import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#003452',
  },
    containerbanner: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 0,
    backgroundColor: "##FF7E04",
  },

    content: {
    flex: 1,
    padding: 16,
  },

  containerViewContador: {
    display: "flex",
    flex: 1,
    padding: 100,
    color: "#f1f",
  },

  banner: {
    width: '100%',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    position: 'relative',
  },

  bannerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
  },

  title: {
    fontSize: 24,
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },

  cardTitle: {
    fontSize: 18,
  },

  scrollView: {
    backgroundColor: '#003452',
    flex: 1
  },

});

export default styles;