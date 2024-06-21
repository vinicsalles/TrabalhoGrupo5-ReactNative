import React from 'react';
import { View, Text, Image, ImageBackground, Alert } from 'react-native';
import { styled } from './style';
import { useNavigation } from '@react-navigation/native';
import Background from "../../Assets/background.jpg";
import Mido from "../../Assets/shadows.gif";
import Catalog from "../../Assets/catalog.png"
import Fusion from "../../Assets/fusion.png"
import { ButtonComponent } from "../../Components/Button";


export function Home() {

  const navigation = useNavigation();

  const soonAlert = () => {
      Alert.alert("Soon")
    }

  return (
    <View style={styled.container}>
      <ImageBackground source={Background} style={styled.background}>     
      <Image
            style={{
              alignSelf: 'center',
              height: 200,
              marginTop: 50,
              marginBottom: 0,
              resizeMode: "contain",
            }}
            source={Mido}
            alt="mido"
          />
      <View style={styled.textBox}>
      <Text style={styled.welcome}>
      Welcome</Text>
      <Text style={styled.shadows}>
      to the Cathedral of Shadows,</Text>    
      <Text style={styled.demons}>
      where demons gather...</Text> 
      </View>  

      <View style={styled.buttonsBox}>
      <ButtonComponent
            recebendoTitle="Catalog"
            recebendoIcon={Catalog}
            recebendoFuncao={soonAlert}
          />
        <ButtonComponent
            recebendoTitle="Fusion"
            recebendoIcon={Fusion}
            recebendoFuncao={soonAlert}
          />
      </View>



      </ImageBackground>
    </View>
  )
}
