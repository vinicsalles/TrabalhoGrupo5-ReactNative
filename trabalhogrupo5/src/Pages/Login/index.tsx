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
import Background from "../../Assets/background.jpg";
import Logo from "../../Assets/logo.png";
import SMTlogo from "../../Assets/smt-logo.png";
import ButtonIcon from "../../Assets/login.png";
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
    if(username=="flynn" && password=="123456") {
      navigation.navigate("StackTabsPages", { name: "Login" })
    } else {
      Alert.alert("Credenciais invalidas!")
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground source={Background} style={styled.background}>
        <View style={styled.container}>
          <Image
            style={{
              width: 180,
              height: 180,
              marginTop: 100,
              marginBottom: -10,
            }}
            source={Logo}
            alt="logo"
          />

          <Text style={styled.title}>Fusion App</Text>

          <TextInputComponent
            recebendoFuncao={handleUsername}
            recebendoValue={username}
            recebendoPlaceHolder="username"
          />

          <TextInputComponent
            recebendoFuncao={handlePassword}
            recebendoValue={password}
            recebendoPlaceHolder="password"
            recebendoTipoDoInput={true}
          />

          <ButtonComponent 
          recebendoTitle="Login" 
          recebendoIcon={ButtonIcon} 
          recebendoFuncao={handleLogin} />

          <Image
            style={{
              width: "50%",
              height: 80,
              resizeMode: "contain",
            }}
            source={SMTlogo}
            alt="smt-logo"
          />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}
