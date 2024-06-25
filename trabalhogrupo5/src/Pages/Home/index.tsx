import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import { TextInput } from 'react-native';
import { Contador } from '../../Components/Contador';
import styles from "./style";
import { useNavigation } from '@react-navigation/native';

export const Home: React.FC = () => {
  const navigation = useNavigation ();
  return (
    <View style={styles.container}>
    <View style={styles.containerbanner}>
    <ImageBackground
      source={require('../../Assets/bannerofc.png')}
      style={styles.banner}
    >
      <View style={styles.containerViewContador}>
        <Contador />
      </View>
    </ImageBackground>
    </View> 
    </View>
  );
};

export default Home;
