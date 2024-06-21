import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import Gradiente from "../../Assets/gradiente.png";
import { styled } from "./style"; 

type PropsButton = {
  recebendoTitle: string;
  recebendoIcon: any;
  recebendoFuncao: () => void;
};

export function ButtonComponent({recebendoTitle, recebendoIcon, recebendoFuncao,}: PropsButton) {

  return (
    <>
      <TouchableOpacity style={styled.button} onPress={recebendoFuncao}>
        <Image style={styled.gradiente} source={Gradiente} alt="gradiente" />

        <Image style={styled.icon} source={recebendoIcon} alt="icon" />

        <Text style={styled.title}>{recebendoTitle}</Text>
      </TouchableOpacity>
    </>
  );
}
