import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import axios from "axios";
import {styles} from "./style";
import { useRoute } from "@react-navigation/native";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const ProductDetailScreen: React.FC = () => {
  const route = useRoute();
  const { id } = route.params as { id: number };
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api.example.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>Preço: R$ {product.price.toFixed(2)}</Text>
    </View>
  );
};

export default ProductDetailScreen;
