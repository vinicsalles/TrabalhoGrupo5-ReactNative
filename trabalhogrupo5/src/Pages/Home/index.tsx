import React from "react";
import { TextInput } from "react-native";
import { View } from "react-native";
import { Contador } from "../../Components/Contador";
import styles from "./style";

export const Home = () => {
  return (
    <View style={styles.containerViewContador}>
      <Contador />
    </View>
  );
};
