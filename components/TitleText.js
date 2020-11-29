import React from "react";
import { Text, StyleSheet } from "react-native";

const TitleText = (props) => {
  const titleStyle = props.bold ? styles.title : styles.thinTitle;

  return (
    <Text style={{ ...titleStyle, ...props.style }}>{props.children}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: "open-sans-bold",
  },
  thinTitle: {
    fontSize: 20,
    fontFamily: "open-sans",
  },
});

export default TitleText;
