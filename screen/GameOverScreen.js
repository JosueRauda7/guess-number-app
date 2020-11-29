import React from "react";
import { StyleSheet, View, Button, Image } from "react-native";

import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText bold style={styles.title}>
        ¡Juego finalizado!
      </TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          // source={require("../assets/success.png")}
          fadeDuration={500}
          source={{
            uri:
              "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2018/05/matterhorn-3x2.jpg",
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <BodyText style={styles.text}>
          Número ingresado: {props.guessNumber}
        </BodyText>
        <BodyText style={styles.text}>
          Rondas realizadas: {props.rounds}
        </BodyText>
      </View>
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
  textContainer: {
    marginBottom: 15,
  },
  title: {
    fontSize: 35,
  },
  text: {
    fontSize: 18,
  },
  imageContainer: {
    width: 285,
    height: 285,
    borderRadius: 500,
    borderColor: "black",
    borderWidth: 4,
    marginVertical: 25,
    overflow: "hidden",
  },
  image: {
    //Only with local Image
    width: "100%",
    height: "100%",
  },
});

export default GameOverScreen;
