import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenNames } from "../navigation/types";
import { COLORS } from "../utils/colors";
import Button from "../components/Button";

interface Props {}

const Success = ({
  navigation,
}: Props & NativeStackScreenProps<RootStackParamList, ScreenNames.Success>) => {
  const onPress = () => navigation.navigate(ScreenNames.TabNav);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Thanks for renting a car!</Text>
      <View style={styles.buttonContainer}>
        <Button text="Continue" onPress={onPress} />
      </View>
    </View>
  );
};

export default Success;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
  },
  text: {
    marginTop: 300,
    fontSize: 24,
    fontWeight: "600",
    color: COLORS.black,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 24,
  },
});
