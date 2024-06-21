import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { ButtonComponent } from "../../Components/Button";
import { useNavigation } from "@react-navigation/native";
import { styled } from "./style";

export function Profile() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("StackLogin", { name: "Login" });
  };

  return (
    <View style={styled.container}>
      <ImageBackground style={styled.background}>
        
        <Text style={styled.title}>Sair?</Text>

        <View style={styled.button}>
          <ButtonComponent
            recebendoTitle="Sair"
            recebendoCor={121212}
            recebendoFuncao={handleLogout}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
