import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Alert,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Produto {
  id: number;
  title: string;
  image: string;
  price: number;
}

const DetalheProdutoScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params as { id: number };
  const [produto, setProduto] = useState<Produto | null>(null);
  const [cep, setCep] = useState("");
  const [dadosCep, setDadosCep] = useState<any | null>(null);
  const [usuario, setUsuario] = useState<string | null>(null);

  useEffect(() => {
    const buscarProduto = async () => {
      try {
        const response = await axios.get(
          `https://6674cee475872d0e0a979434.mockapi.io/produtos/${id}`
        );
        setProduto(response.data);
      } catch (error) {
        console.error("Erro ao buscar detalhes do produto:", error);
      }
    };

    buscarProduto();
  }, [id]);

  useEffect(() => {
    const buscarUsuario = async () => {
      try {
        const nomeUsuario = await AsyncStorage.getItem("@Login");
        setUsuario(nomeUsuario);
      } catch (error) {
        console.error("Erro ao buscar o nome do usuário:", error);
      }
    };

    buscarUsuario();
  }, []);

  const handleCep = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      setDadosCep(response.data);
    } catch (error) {
      console.error("Erro ao buscar detalhes do CEP:", error);
    }
  };

  const handleCompra = () => {
    navigation.navigate("StackPagamento", { name: "Pagamentos" });
  };
  if (!produto) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={24} color="#ffa500" />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <Image source={{ uri: produto.image }} style={styles.image} />
      <Text style={styles.title}>{produto.title}</Text>
      <Text style={styles.price}>Preço: R$ {produto.price.toFixed(2)}</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu CEP"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.button} onPress={handleCep}>
        <Text style={styles.buttonText}>Calcular Frete</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleCompra}>
        <Text style={styles.buttonText}>Comprar</Text>
      </TouchableOpacity>
      {dadosCep && (
        <View style={styles.containerCep}>
          <Text style={styles.textAsync}>
            Olá {usuario} estes são seus dados de envio:
          </Text>
          <Text style={styles.textCep}>
            <Text style={styles.textCepNegrito}>Valor do Frete:</Text> R$
            {(19.99).toFixed(2)}{" "}
          </Text>
          <Text style={styles.textCep}>
            <Text style={styles.textCepNegrito}>Cep:</Text> {dadosCep.cep}
          </Text>
          <Text>
            <Text style={styles.textCepNegrito}>Rua:</Text>{" "}
            {dadosCep.logradouro}
          </Text>
          <Text>
            <Text style={styles.textCepNegrito}>Bairro:</Text> {dadosCep.bairro}
          </Text>
          <Text>
            <Text style={styles.textCepNegrito}>Cidade:</Text>{" "}
            {dadosCep.localidade}
          </Text>
          <Text>
            <Text style={styles.textCepNegrito}>Estado:</Text> {dadosCep.uf}
          </Text>
        </View>
      )}
    </View>
  );
};

export default DetalheProdutoScreen;
