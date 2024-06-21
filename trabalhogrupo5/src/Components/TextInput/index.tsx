import React from 'react'
import { TextInput } from 'react-native'
import { styled } from './style'

type PropsComponent = {
  recebendoPlaceHolder?: string;
  recebendoValue: string;
  recebendoFuncao: (value: string) => void;
  recebendoTipoDoInput?: boolean;
  recebendoBackgroundColor?: string;
}

export function TextInputComponent({
  recebendoFuncao, 
  recebendoPlaceHolder, 
  recebendoValue,
  recebendoTipoDoInput,
  recebendoBackgroundColor
  }: PropsComponent) {

  return (
    <TextInput
      onChangeText={recebendoFuncao}
      autoCapitalize="none"
      value={recebendoValue}
      style={[styled.styleInput, { 
        backgroundColor: recebendoBackgroundColor ? recebendoBackgroundColor : '#fff'
       }]}
      placeholder={recebendoPlaceHolder ? recebendoPlaceHolder : "Placeholder default"}
      secureTextEntry={recebendoTipoDoInput}
    />
  )
}
