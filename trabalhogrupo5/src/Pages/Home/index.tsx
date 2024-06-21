import React from 'react';
import { View, Text, Image, ImageBackground, Alert } from 'react-native';
import { styled } from './style';
import { useNavigation } from '@react-navigation/native';
import { ButtonComponent } from "../../Components/Button";


export function Home() {

  const navigation = useNavigation();

  const soonAlert = () => {
      Alert.alert("null")
    }

  return (
    <View style={styled.container}>
      <ImageBackground style={styled.background}>     
      
      <Text style={styled.welcome}>
      Bem vindo</Text> 

      <View style={styled.buttonsBox}>
      <ButtonComponent
            recebendoCor={121212}
            recebendoTitle="button 1"
            recebendoFuncao={soonAlert}
          />
        <ButtonComponent
        recebendoCor={121212}
            recebendoTitle="button 2"
            recebendoFuncao={soonAlert}
          />
      </View>



      </ImageBackground>
    </View>
  )
}
