import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import ProductCard from '../../components/cardProduto';
import axios from 'axios';
import styles from './style';

interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
}

const HomeScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios.get('https://6674cee475872d0e0a979434.mockapi.io/produtos')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
