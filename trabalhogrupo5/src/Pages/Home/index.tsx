import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';
import ProductCard from '../../Components/CardProduto';
import axios from 'axios';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import { Contador } from '../../Components/Contador';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

export const Home: React.FC = () => {
  const navigation = useNavigation();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);

  const featuredProductIds = [1, 2, 3];

  useEffect(() => {
    axios
      .get('https://6674cee475872d0e0a979434.mockapi.io/produtos')
      .then((response) => {
        console.log('Dados da API:', response.data);
        setProducts(response.data);

        const filteredFeaturedProducts = response.data.filter((product: Product) =>
          featuredProductIds.includes(product.id),
        );
        console.log('Produtos Destacados:', filteredFeaturedProducts);
        setFeaturedProducts(filteredFeaturedProducts.slice(0, 3));
      })
      .catch((error) => {
        console.error('Erro ao buscar produtos:', error);
      })
      .finally(() => setLoading(false));
  }, []);

  const cardStyles = StyleSheet.create({
    card: {
      backgroundColor: '#48C6FD',
      borderRadius: 8,
      padding: 10,
      marginBottom: 15,
      alignItems: 'center',
    },
    featuredCard: {
      backgroundColor: '#FFD700',
    },
  });

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.containerbanner}>
          <ImageBackground
            source={require('../../Assets/banneroficialdois.jpg')}
            style={styles.banner}>
            <View style={styles.containerViewContador}>
              <Contador />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.content}>
          {loading ? (
            <Text>Carregando...</Text>
          ) : (
            featuredProducts.map((product) => (
              <TouchableOpacity
                key={product.id}
                onPress={() =>
                  navigation.navigate
                }>
                <View style={[cardStyles.card, cardStyles.featuredCard]}>
                  <ProductCard product={product} />
                </View>
              </TouchableOpacity>
            ))
          )}
          <ScrollView>
            <View style={styles.container}>
              {products.slice(0, 3).map((product) => (
                <View style={cardStyles.card} key={product.id}>
                  <ProductCard product={product} />
                </View>
              ))}
            </View>
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;