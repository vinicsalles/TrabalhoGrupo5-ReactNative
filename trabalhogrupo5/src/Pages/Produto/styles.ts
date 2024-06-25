import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#00264d",
    justifyContent: "center",
    alignItems: "center",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    padding: 10,
    marginBottom: 16,
  },
  backButtonText: {
    color: "#FF7E04",
    fontSize: 16,
    marginLeft: 5,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 8,
    textAlign: "center",
  },
  price: {
    fontSize: 18,
    color: "#888",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    width: "80%",
    borderRadius: 5,
    color: "#00264d",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#FF7E04",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 16,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  shippingCost: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 16,
    textAlign: "center",
  },
  loadingText: {
    fontSize: 18,
    color: "#fff",
  },
});
