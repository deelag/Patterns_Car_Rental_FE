import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS } from "../utils/colors";

interface IProps {
  text: string;
  onPress: () => void;
}

const Button = ({ text, onPress }: IProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    marginBottom: 40,
    height: 52,
    width: "100%",
    borderRadius: 20,
    backgroundColor: COLORS.secondary,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textTransform: "uppercase",
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "800",
  },
});
