import React, { useEffect, useState } from "react";
import { View, Text, Image, TextInput, Alert, TouchableOpacity, StyleSheet } from "react-native";
import axios from "axios";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // Importando ícone do Expo
import { styles } from "./styles";  // Certifique-se que o caminho do style está correto

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const ProductDetailScreen: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params as { id: number };
  const [product, setProduct] = useState<Product | null>(null);
  const [zipCode, setZipCode] = useState("");
  const [shippingCost, setShippingCost] = useState<number | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://6674cee475872d0e0a979434.mockapi.io/produtos/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handlePurchase = () => {
    Alert.alert("Compra realizada", `Você comprou o produto: ${product?.title}`);
  };

  const calculateShipping = async () => {
    const simulatedCost = 19.99;  // Valor fixo para fins de exemplo
    setShippingCost(simulatedCost);
    Alert.alert("Cálculo de Frete", `O custo do frete para o CEP ${zipCode} é R$ ${simulatedCost.toFixed(2)}`);
  };

  if (!product) {
    return (
      <View style={styles.container}>
        <Text style={styles.loadingText}>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#ffa500" />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>Preço: R$ {product.price.toFixed(2)}</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu CEP"
        value={zipCode}
        onChangeText={setZipCode}
        keyboardType="numeric"
        placeholderTextColor="#aaa"
      />
      <TouchableOpacity style={styles.button} onPress={calculateShipping}>
        <Text style={styles.buttonText}>Calcular Frete</Text>
      </TouchableOpacity>
      {shippingCost !== null && (
        <Text style={styles.shippingCost}>Frete: R$ {shippingCost.toFixed(2)}</Text>
      )}
      <TouchableOpacity style={styles.button} onPress={handlePurchase}>
        <Text style={styles.buttonText}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailScreen;
