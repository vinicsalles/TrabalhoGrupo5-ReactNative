import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#00264d", // Azul escuro
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#00264d", // Azul escuro
  },
  productCard: {
    backgroundColor: "#ffa500", // Laranja
    borderRadius: 8,
    padding: 16,
    marginVertical: 8,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff", // Branco
    marginBottom: 8,
  },
  productImage: {
    width: "100%",
    height: 150,
    borderRadius: 8,
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffffff", // Branco
  },
});

export default styles;
