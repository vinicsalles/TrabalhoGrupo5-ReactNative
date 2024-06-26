import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { ButtonComponent } from "../../Components/Button";
import { useNavigation } from "@react-navigation/native";
import { styled } from "./style";
import { useAuth } from "../../Hooks/useAuth";
import axios from "axios";
import perfil from "../../Assets/profile.png"

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
      <View style={styled.card}>
          <Image source={perfil} style={styled.imageCard} />
          
          <View style={styled.boxPerfil} >
          <Text style={styled.title}>Perfil</Text>
          </View>
          

          <View style={styled.box}>
              <Text style={styled.titleBox}>Dados do Usuário:</Text>
              <Text style={styled.textBox}>Username: "{username}"</Text>
              <Text style={styled.textBox}>Senha: "{password}"</Text>
          </View>

          <View style={styled.box}>
            <Text style={styled.titleBox}>Endereço:</Text>
              {enderecos.map((endereco) => (
                <View key={endereco.id}>
                  <Text style={styled.textBox}>Estado: {endereco.estado}</Text>
                  <Text style={styled.textBox}>Cidade: {endereco.cidade}</Text>
                  <Text style={styled.textBox}>Bairro: {endereco.bairro}</Text>
                  <Text style={styled.textBox}>CEP: {endereco.cep}</Text>
                </View>
              ))}
          </View>

        <View style={styled.button}>
          <ButtonComponent
            recebendoTitle="Sair"
            recebendoCor="#00264d"
            recebendoFuncao={handleLogout}
            corFonte="white"
          />
        </View>
      </View>
    </View>
  );
}

