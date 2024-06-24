import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { styled } from "./style";

type PropsButton = {
  recebendoTitle: string;
  recebendoCor: string;
  recebendoIcon: any;
  recebendoFuncao: () => void;
};

export function ButtonComponent({
  recebendoTitle,
  recebendoCor,
  recebendoIcon,
  recebendoFuncao,
}: PropsButton) {
  return (
    <>
      <TouchableOpacity
        style={[styled.button, { backgroundColor: recebendoCor }]}
        onPress={recebendoFuncao}
      >
        <View style={styled.bContent}>
        <Image style={styled.icon} source={recebendoIcon} alt="icon" />
        <Text style={styled.title}>{recebendoTitle}</Text>
        </View>

      </TouchableOpacity>
    </>
  );
}
