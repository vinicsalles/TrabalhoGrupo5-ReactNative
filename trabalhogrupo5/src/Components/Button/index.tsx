import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { styled } from "./style"; 

type PropsButton = {
  recebendoTitle: string;
  recebendoCor: any;
  recebendoFuncao: () => void;
};

export function ButtonComponent({recebendoTitle, recebendoCor, recebendoFuncao,}: PropsButton) {

  return (
    <>
      <TouchableOpacity
      style={[styled.button, { backgroundColor: recebendoCor }]}
      onPress={recebendoFuncao}
    >
      <Text style={styled.title}>{recebendoTitle}</Text>
    </TouchableOpacity>
    </>
  );
}
