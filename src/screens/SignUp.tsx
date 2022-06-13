import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import {
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
} from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";
import { AuthStackParamList, ScreenNames } from "../navigation/types";
import { COLORS } from "../utils/colors";

interface IProps {}

const SignUp = ({
  navigation,
}: IProps & NativeStackScreenProps<AuthStackParamList, ScreenNames.SignUp>) => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const onSignUpPress = () => navigation.navigate(ScreenNames.TabNav);

  return (
    <Pressable style={styles.container} onPress={Keyboard.dismiss}>
      <View style={styles.fieldsContainer}>
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
        />
        <Input
          styles={styles.fieldSpacing}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="First Name"
          keyboardType="default"
        />
        <Input
          styles={styles.fieldSpacing}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Last Name"
          keyboardType="default"
        />
        <Input
          styles={styles.fieldSpacing}
          value={address}
          onChangeText={setAddress}
          placeholder="Address"
          keyboardType="default"
        />
        <Input
          styles={styles.fieldSpacing}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          keyboardType="default"
          password
          hidePassword={hidePassword}
          setHidePassword={setHidePassword}
        />
      </View>
      <View style={styles.keyboardAvoidingView}>
        <Button text="Sign Up" onPress={onSignUpPress} />
      </View>
    </Pressable>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: "center",
    justifyContent: "space-between",
  },
  fieldsContainer: {
    width: "100%",
    marginTop: 48,
    paddingHorizontal: 28,
  },
  fieldSpacing: {
    marginTop: 52,
  },
  signUp: {
    alignSelf: "center",
    width: "60%",
    marginTop: 80,
  },
  signUpText: {
    textAlign: "center",
    textDecorationLine: "underline",
    fontSize: 16,
    fontWeight: "500",
    color: COLORS.grey,
  },
  keyboardAvoidingView: {
    width: "100%",
    paddingHorizontal: 24,
  },
});
