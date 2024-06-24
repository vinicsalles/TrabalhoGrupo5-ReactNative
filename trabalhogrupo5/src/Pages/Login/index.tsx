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
import { useNavigation } from "@react-navigation/native";
import { ButtonComponent } from "../../Components/Button";
import Gradiente from "../../Assets/gradiente.png";

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
    if (username == "usuario" && password == "123456") {
      navigation.navigate("StackTabsPages", { name: "Login" });
    } else {
      Alert.alert("Credenciais invalidas!");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={Gradiente} style={styled.background}>
        <View style={styled.container}>

        <ButtonComponent
            recebendoCor="white"
            recebendoTitle="Login"
            recebendoFuncao={handleLogin}
          />

          <Image style={styled.logo} source={Logo} />

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

          <Text style={styled.forgot}>Esqueci a senha!</Text>

          <ButtonComponent
            recebendoCor="#48C6FD"
            recebendoTitle="Login"
            recebendoFuncao={handleLogin}
          />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
