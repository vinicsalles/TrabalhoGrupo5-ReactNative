import React from "react";
import { View, Image } from "react-native";
import { Contador } from "../../Components/Contador";
import styles from "./style";
import Sale from "../../Assets/sale.png";

export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerViewContador}>
        <Contador />
      </View>
      <Image source={Sale} style={styles.sale} />
    </View>
  );
};
