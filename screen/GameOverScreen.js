import React from "react";
import { StyleSheet, View, Button, Image, Text } from "react-native";

import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";
import * as Colors from "../constants/colors";
import MainButton from "../components/MainButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText bold style={styles.title}>
        ¡Juego finalizado!
      </TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/success.png")}
          fadeDuration={500}
          // source={{
          //   uri:
          //     "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2018/05/matterhorn-3x2.jpg",
          // }}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.resultContainer}>
          <BodyText style={styles.text}>
            Tu teléfono ha necesitado{" "}
            <Text style={styles.highlight}>{props.guessNumber}</Text> rondas
            para adivinar el número{" "}
            <Text style={styles.highlight}>{props.rounds}</Text>
          </BodyText>
        </View>
      </View>
      <MainButton onPress={props.onRestart}>Jugar de nuevo</MainButton>
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
    textAlign: "center",
    marginVertical: 15,
  },
  resultContainer: {
    marginHorizontal: 20,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
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
