import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { ButtonComponent } from "../../Components/Button";
import Logout from "../../Assets/logout.png";
import { useNavigation } from "@react-navigation/native";
import Background from "../../Assets/background.jpg";
import Burr from "../../Assets/burr.jpg";
import { styled } from "./style";

export function Profile() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("StackLogin", { name: "Login" });
  };

  return (
    <View style={styled.container}>
      <ImageBackground source={Background} style={styled.background}>
        <Image
          style={{
            alignSelf: "center",
            height: 200,
            marginTop: 0,
            marginBottom: 0,
            resizeMode: "contain",
          }}
          source={Burr}
          alt="burroghts"
        />
        <Text style={styled.title}>What can I do for you today?</Text>

        <View style={styled.button}>
          <ButtonComponent
            recebendoTitle="Logout"
            recebendoIcon={Logout}
            recebendoFuncao={handleLogout}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
