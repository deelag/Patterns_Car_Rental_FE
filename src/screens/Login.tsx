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
import { COLORS } from "../utils/colors";

interface IProps {}

const Login = ({}: IProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          keyboardType="default"
          password
          showPassword
          setShowPassword={setShowPassword}
        />

        <TouchableOpacity style={styles.signUp}>
          <Text style={styles.signUpText}>
            Don't have an account? Feel free to sign up!
          </Text>
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        behavior="padding"
        keyboardVerticalOffset={80}
        style={styles.keyboardAvoidingView}
      >
        <Button text="Continue" />
      </KeyboardAvoidingView>
    </Pressable>
  );
};

export default Login;

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
    marginTop: 72,
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
