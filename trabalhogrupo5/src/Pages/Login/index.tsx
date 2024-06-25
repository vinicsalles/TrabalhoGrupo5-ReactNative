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
import Google from "../../Assets/icons8-google-logo-48.png";
import Meta from "../../Assets/icons8-meta-48.png";
import Apple from "../../Assets/icons8-mac-os-30.png";
import { LineComponent } from "../../Components/line";
import { AsyncStorage } from "react-native";

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

  async function handleAsync() {
    await AsyncStorage.setItem("@Login", username, password);
  }

  const skipLogin = () => {
    navigation.navigate("Drawer", { name: "Login" });
  };

  const handleLogin = () => {
    if (username == "usuario" && password == "123456") {
      handleAsync();
      navigation.navigate("Drawer", { name: "Login" });
    } else {
      Alert.alert("Credenciais invalidas!");
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={Gradiente} style={styled.background}>
        <View style={styled.container}>
          <Image style={styled.logo} source={Logo} />

          <TextInputComponent
            recebendoFuncao={handleUsername}
            recebendoValue={username}
            recebendoPlaceHolder="Email"
          />

          <TextInputComponent
            recebendoFuncao={handlePassword}
            recebendoValue={password}
            recebendoPlaceHolder="Senha"
            recebendoTipoDoInput={true}
          />

          <Text style={styled.forgot}>Esqueci a senha!</Text>

          <ButtonComponent
            corFonte="white"
            recebendoCor="#003452"
            recebendoTitle="Login"
            recebendoIcon={null}
            recebendoFuncao={handleLogin}
          />

          <LineComponent recebendoTexto="OU" />

          <ButtonComponent
            corFonte=""
            recebendoCor="white"
            recebendoIcon={Google}
            recebendoTitle="Continue com Google"
            recebendoFuncao={skipLogin}
          />

          <ButtonComponent
            corFonte=""
            recebendoCor="white"
            recebendoIcon={Meta}
            recebendoTitle="Continue com Meta"
            recebendoFuncao={skipLogin}
          />

          <ButtonComponent
            corFonte=""
            recebendoCor="white"
            recebendoIcon={Apple}
            recebendoTitle="Continue com Apple"
            recebendoFuncao={skipLogin}
          />
          <Text style={styled.signup}>Não tem uma conta? Registre-se!</Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
