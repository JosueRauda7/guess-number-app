import React from "react";
import { TextInput, StyleSheet } from "react-native";
import Colors from "../constants/colors";

const Input = (props) => {
  return (
    <TextInput
      // Debe ir al inicio el {...props}
      {...props}
      style={{ ...styles.input, ...props.style }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderBottomColor: Colors.primary,
    borderBottomWidth: 1,
    height: 30,
    marginVertical: 15,
    fontSize: 14,
  },
});

export default Input;
