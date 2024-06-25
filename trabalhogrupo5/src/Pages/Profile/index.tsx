import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Image, ScrollView } from "react-native";
import { ButtonComponent } from "../../Components/Button";
import { useNavigation } from "@react-navigation/native";
import { styled } from "./style";
import { useAuth } from "../../Hooks/useAuth";
import axios from "axios";

export function Profile() {
  const navigation = useNavigation();

  const {username} = useAuth();
  const {password} = useAuth();

  const [enderecos, setEnderecos] = useState([]);

  useEffect(() => {
    axios
      .get("https://6675f864a8d2b4d072f20c24.mockapi.io/info")
      .then((response) => setEnderecos(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleLogout = () => {
    navigation.navigate("StackLogin", { name: "Login" });
  };

  return (
    <View style={styled.container}>
      <ImageBackground style={styled.background}>
        <Text style={styled.title}>Meu Perfil</Text>

        <View style={styled.box}>
          <Text style={styled.titleBox}>Informações do Usuário:</Text>
          <Text>Username: "{username}"</Text>
          <Text>Senha: "{password}"</Text>
        </View>

        <View style={styled.box}>
          <Text style={styled.titleBox}>Informações de endereço:</Text>
            {enderecos.map((endereco) => (
              <View key={endereco.id}>
                <Text>Cidade: {endereco.estado}</Text>
                <Text>CEP: {endereco.cidade}</Text>
                <Text>Bairro: {endereco.bairro}</Text>
                <Text>Estado: {endereco.cep}</Text>
              </View>
            ))}
        </View>

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

