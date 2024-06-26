import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Alert,
} from "react-native";
import { styles } from "./style";
import { useNavigation } from "@react-navigation/native";

export const Pagamentos = () => {
  const [usuario, setUsuario] = useState<string | null>(null);
  const [codigoBoleto, setCodigoBoleto] = useState<string | null>(null);
  const [numeroCartao, setNumeroCartao] = useState<string>("");

  const navigation = useNavigation();

  useEffect(() => {
    const buscarUsuario = async () => {
      try {
        const nomeUsuario = await AsyncStorage.getItem("@Login");
        setUsuario(nomeUsuario);
      } catch (error) {
        console.error("Erro ao buscar o nome do usuário:", error);
      }
    };
    buscarUsuario();
  }, []);

  const handlePressGerarBoleto = () => {
    const codigoBoletoGerado = "328372232-323232-32324-8378-238";
    setCodigoBoleto(codigoBoletoGerado);
  };

  const handleComprar = () => {
    Alert.alert("Compra Efetuada com Sucesso");
    setTimeout(() => {
      navigation.navigate("Drawer", { name: "Catalogo" });
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Bem {usuario}</Text>
      <Text style={styles.textContainer}>Escolha uma das opções abaixo:</Text>

      <View style={styles.opcaoContainer}>
        <View style={styles.pixContainer}>
          <Image source={require("../../Assets/pix.png")}></Image>
          <Text style={styles.textContainer}>Pix</Text>
        </View>
        <Image
          source={require("../../Assets/qrcode.png")}
          style={{ width: 120, height: 120 }}
        />
      </View>

      <View style={styles.opcaoContainerCardCartao}>
        <View style={styles.pixContainer}>
          <Image source={require("../../Assets/Wallet.png")}></Image>
          <Text style={styles.textContainerCartao}>Cartões</Text>
        </View>
      </View>
      <View style={styles.opcaoContainerCartao}>
        <Image
          source={require("../../Assets/mastercard.png")}
          style={{ width: 50, height: 30 }}
        />
        <TextInput
          placeholder="Número do Cartão"
          placeholderTextColor="#f1f1f1"
          value={numeroCartao}
          onChangeText={(text) => setNumeroCartao(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.opcaoContainerCartao}>
        <Image
          source={require("../../Assets/mercadopago.png")}
          style={{ width: 50, height: 30 }}
        />
        <TextInput
          placeholder="Número do Cartão"
          placeholderTextColor="#f1f1f1"
          value={numeroCartao}
          onChangeText={(text) => setNumeroCartao(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.opcaoContainerCartao}>
        <Image
          source={require("../../Assets/elo.png")}
          style={{ width: 50, height: 50 }}
        />
        <TextInput
          placeholder="Número do Cartão"
          placeholderTextColor="#f1f1f1"
          value={numeroCartao}
          onChangeText={(text) => setNumeroCartao(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.opcaoContainerCartao}>
        <Image
          source={require("../../Assets/bitcoin.png")}
          style={{ width: 50, height: 50 }}
        />
        <TextInput
          placeholder="Ex: 0,0000029 BTC (~R$10,00)"
          placeholderTextColor="#f1f1f1"
          value={numeroCartao}
          onChangeText={(text) => setNumeroCartao(text)}
          style={styles.input}
        />
      </View>

      <TouchableOpacity
        onPress={handlePressGerarBoleto}
        style={styles.botaoBoleto}
      >
        <Image source={require("../../Assets/boleto.png")}></Image>
        <Text style={styles.botaoText}>Gerar Boleto</Text>
      </TouchableOpacity>
      {codigoBoleto && (
        <View style={styles.codigoBoletoContainer}>
          <Text style={styles.codigoBoletoContainer}>
            Seu Código do Boleto é:
          </Text>
          <Text style={styles.codigoBoletoContainer}>{codigoBoleto}</Text>
        </View>
      )}
      <TouchableOpacity style={styles.botaoComprar}>
        <Image source={require("../../Assets/dinheiro.png")}></Image>
        <Text style={styles.botaoText} onPress={handleComprar}>
          Comprar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.botaoComprar}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.botaoText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
};
