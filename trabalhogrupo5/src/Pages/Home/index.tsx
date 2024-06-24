import React from "react";
import { View, Image, Text } from "react-native";
import { Contador } from "../../Components/Contador";
import styles from "./style";
import Sale from "../../Assets/sale.png";

export const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Sale} style={styles.sale} />
      <View style={styles.containerViewContador}>
      <Text style={styles.liquidacao} >SUPER LIQUIDAÇÃO!</Text>
      <View style={styles.contador}><Contador /></View>
      </View>
    </View>
  );
};
