import React from "react";
import { View, Text } from "react-native";

type PropsButton = {
  recebendoTexto: string;
};

export function LineComponent({ recebendoTexto }: PropsButton) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <View style={{ width: '34%', height: 1, backgroundColor: "black" }} />
      <View>
        <Text style={{ width: 50, textAlign: "center" }}>{recebendoTexto}</Text>
      </View>
      <View style={{ width: '34%', height: 1, backgroundColor: "black" }} />
    </View>
  );
}
