import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const handleNumberInput = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const handleReset = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const handleConfirm = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("¡Número Inválido!", "El número debe de ser entre 1 y 99", [
        { text: "Okay", style: "destructive", onPress: handleReset },
      ]);
      return;
    } else {
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setEnteredValue("");
      Keyboard.dismiss();
    }
  };

  let confirmedOutput = null;

  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>Has seleccionado el número</Text>
        <NumberContainer>{selectedNumber}</NumberContainer>
        <Button
          color={Colors.primary}
          title='Comenzar a jugar'
          onPress={() => props.onStartGame(selectedNumber)}
        />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game!</Text>
        <Card style={styles.inputContainer}>
          <Text style={{ fontSize: 17 }}>Seleciona un Número</Text>
          <Input
            keyboardType='number-pad'
            placeholder='Escribe un número'
            blurOnSubmit
            autoCorrect={false}
            autoCapitalize='none'
            maxLength={2}
            style={styles.inputText}
            onChangeText={handleNumberInput}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                color={Colors.accent}
                title='Limpiar'
                onPress={handleReset}
              />
            </View>
            <View style={styles.button}>
              <Button
                color={Colors.primary}
                title='Confirmar'
                onPress={handleConfirm}
              />
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: "open-sans-bold",
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  inputText: {
    width: "100%",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 105,
  },
  summaryContainer: {
    marginTop: 20,
    padding: 30,
    // backgroundColor: "#0197F6",
  },
  summaryTitle: {
    fontSize: 20,
    color: "black",
  },
});

export default StartGameScreen;
