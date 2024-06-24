import React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { styled } from "./style";

type PropsButton = {
  recebendoTitle: string;
  recebendoCor: string;
  corFonte: string;
  recebendoIcon?: any;
  recebendoFuncao: () => void;
};

export function ButtonComponent({
  recebendoTitle,
  recebendoCor,
  recebendoIcon,
  corFonte,
  recebendoFuncao,
}: PropsButton) {
  return (
    <>
      <TouchableOpacity
        style={[styled.button, { backgroundColor: recebendoCor }]}
        onPress={recebendoFuncao}
      >
        <View style={styled.bContent}>
        {recebendoIcon ? (
          <Image style={styled.icon} source={recebendoIcon} alt="icon" />
        ) : null}
        <Text style={[styled.title, { color: corFonte }]}>{recebendoTitle}</Text>
        </View>

      </TouchableOpacity>
    </>
  );
}
