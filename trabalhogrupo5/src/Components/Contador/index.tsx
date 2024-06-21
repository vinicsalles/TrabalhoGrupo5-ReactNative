import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

export const Contador = () => {
  const tempoInicial = 5 * 60 * 60;
  const [segundos, setSegundos] = useState<number>(tempoInicial);

  useEffect(() => {
    if (segundos > 0) {
      const tempo = setInterval(() => {
        setSegundos((prevSeconds) => prevSeconds - 1);
      }, 1000);
      return () => clearInterval(tempo);
    }
  }, [segundos]);

  const formatacaoTempo = (secs: number) => {
    const horas = Math.floor(secs / 3600);
    const minutos = Math.floor((secs % 3600) / 60);
    const segundos = secs % 60;
    return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(
      2,
      "0"
    )}:${String(segundos).padStart(2, "0")}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timer}>{formatacaoTempo(segundos)}</Text>
    </View>
  );
};
