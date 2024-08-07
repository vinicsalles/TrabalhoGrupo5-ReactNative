import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FF7E04",
    borderRadius: 8,
    padding: 16,
    margin: 8,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 12,
    resizeMode: "cover",
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
    color: "#ffffff", // Branco
  },
  price: {
    fontSize: 16,
    marginBottom: 8,
    color: "#ffffff", // Branco
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    width: "100%",
  },
  button: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buyButton: {
    backgroundColor: "#00264d", // Azul escuro
    marginRight: 8,
  },
  cartButton: {
    backgroundColor: "#00264d", // Azul escuro
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default styles;
