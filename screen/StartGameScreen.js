import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Card from "../components/Card";
import Colors from "../constants/colors";
import Input from "../components/Input";

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
    if (
      chosenNumber === NaN ||
      chosenNumber <= 0 ||
      chosenNumber > 99 ||
      enteredValue.trim().length === 0
    ) {
      return;
    } else {
      setConfirmed(true);
      setSelectedNumber(chosenNumber);
      setEnteredValue("");
    }
  };

  let confirmedOutput = null;

  if (confirmed) {
    confirmedOutput = <Text>Chosen Number: {selectedNumber}</Text>;
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
});

export default StartGameScreen;
