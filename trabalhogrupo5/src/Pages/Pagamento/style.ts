import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#003452",
    padding: 20,
  },
  textContainer: {
    fontSize: 19,
    textAlign: "center",
    marginBottom: 17,
    color: "#f1f1f1",
  },
  textContainerCartao: {
    fontSize: 19,
    textAlign: "center",
    marginBottom: 7,
    color: "#f1f1f1",
  },
  opcaoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  opcaoContainerCartao: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
  botao: {
    backgroundColor: "#FF7E04",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    width: "100%",
    marginBottom: 20,
  },
  botaoText: {
    color: "#f1f1f1",
    fontSize: 16,
    fontWeight: "900",
  },
  codigoBoletoContainer: {
    color: "#f1f1f1",
    alignItems: "center",
    marginBottom: 20,
  },
  codigoBoletoContainerText: {
    color: "#f1f1f1",
  },
});
