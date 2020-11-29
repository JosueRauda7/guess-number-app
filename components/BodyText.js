import React from "react";
import { Text, StyleSheet } from "react-native";

const BodyText = (props) => {
  const bodyStyle = props.bold ? styles.body : styles.thinBody;

  return <Text style={{ ...bodyStyle, ...props.style }}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  body: {
    fontFamily: "open-sans-bold",
  },
  thinBody: {
    fontFamily: "open-sans",
  },
});

export default BodyText;
