import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
  ImageBackground,
} from "react-native";
import { styled } from "./style";
import Logo from "../../Assets/logo.png";
import { TextInputComponent } from "../../Components/TextInput";
import { useNavigation } from '@react-navigation/native';
import { ButtonComponent } from "../../Components/Button";

export function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  
  const navigation = useNavigation();

  const handleUsername = (value: string) => {
    setUsername(value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
  };

  const handleLogin = () => {
    if(username=="usuario" && password=="123456") {
      navigation.navigate("StackTabsPages", { name: "Login" })
    } else {
      Alert.alert("Credenciais invalidas!")
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground style={styled.background}>
        <View style={styled.container}>
          <Image
            style={{
              width: 280,
              height: 280,
              marginTop: 100,
              marginBottom: -10,
            }}
            source={Logo}
            alt="logo"
          />

          <TextInputComponent
            recebendoFuncao={handleUsername}
            recebendoValue={username}
            recebendoPlaceHolder="email"
          />

          <TextInputComponent
            recebendoFuncao={handlePassword}
            recebendoValue={password}
            recebendoPlaceHolder="senha"
            recebendoTipoDoInput={true}
          />

          <ButtonComponent 
          recebendoCor= '#48C6FD'
          recebendoTitle="Login"
          recebendoFuncao={handleLogin} />

        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
