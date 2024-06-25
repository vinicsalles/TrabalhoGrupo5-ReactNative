import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}
//ola bb
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigation = useNavigation();

  const handleBuyPress = () => {
    console.log(`Produto ${product.title} comprado!`);
  };
//ola bb
  const handleCartPress = () => {
    navigation.navigate('StackDetails', { id: product.id });
  };

  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>Preço: R$ {product.price.toFixed(2)}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.buyButton]}
          onPress={handleBuyPress}
        >
          <Text style={styles.buttonText}>Comprar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.cartButton]}
          onPress={handleCartPress}
        >
          <Text style={styles.buttonText}>Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
