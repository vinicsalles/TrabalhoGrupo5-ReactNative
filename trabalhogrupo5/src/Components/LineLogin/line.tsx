import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

type PropsButton = {
  recebendoTexto: string;
};

export function LineComponent({ recebendoTexto }: PropsButton) {
  return (
    <View style={styles.container}>
      <View style={styles.containerView} />
      <View>
        <Text style={styles.containerRecebe}>{recebendoTexto}</Text>
      </View>
      <View style={styles.containerView} />
    </View>
  );
}
