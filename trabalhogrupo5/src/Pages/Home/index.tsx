import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { TextInput } from 'react-native';
import { Contador } from '../../Components/Contador';
import styles from "./style";
import { useNavigation } from '@react-navigation/native';

const promotions = [
  { id: '1', title: 'Promoção 1' },
  { id: '2', title: 'Promoção 2' },
  { id: '3', title: 'Promoção 3' },
];

export const Home: React.FC = () => {
  const navigation = useNavigation ();
  return (
    <View style={styles.container}>
    <View style={styles.containerbanner}>
    {/* Banner com imagem de fundo */}
    <ImageBackground
      source={require('../../Assets/bannerofc.png')}
      style={styles.banner}
    >
      {/* Coloque o contador dentro do ImageBackground */}
      <View style={styles.containerViewContador}>
        <Contador />
      </View>
    </ImageBackground>
    </View>
    <View style={styles.content}>
      <Text style={styles.title}>Promoções</Text>
      <FlatList
        data={promotions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Catalogo', { promotionId: item.id })}
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
    </View>

  );
};

export default Home;
