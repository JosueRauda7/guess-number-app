import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>¡Juego finalizado!</Text>
      <Text>Número ingresado: {props.guessNumber}</Text>
      <Text>Rondas realizadas: {props.rounds}</Text>
      <Button title='Jugar de Nuevo' onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default GameOverScreen;
