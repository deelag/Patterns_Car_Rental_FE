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
import { useDispatch } from "react-redux";
import Button from "../components/Button";
import Input from "../components/Input";
import { AuthStackParamList, ScreenNames } from "../navigation/types";
import { AppDispatch } from "../redux/reduxStore";
import { createUserData } from "../redux/userActions";
import { COLORS } from "../utils/colors";

interface IProps {}

const Login = ({
  navigation,
}: IProps & NativeStackScreenProps<AuthStackParamList, ScreenNames.Login>) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const dispatch = useDispatch<AppDispatch>();

  const onSignUpPress = () => {
    Keyboard.dismiss();
    navigation.navigate(ScreenNames.SignUp);
  };

  const onContinuePress = () => {
    const newClient = {
      avatar: "https://robohash.org/amogus",
      email,
      password,
    };
    const newFullName = {
      name: "VLAD",
      surname: "DOROFEIEV",
      patronymic: "FFFFFFF",
    };
    const newAddress = {
      country: "Ukraine",
      city: "AAAAA",
      street: "Random",
      buildingNumber: "10",
      flatNumber: "10",
    };

    dispatch(createUserData(newClient, newFullName, newAddress));
  };

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
          hidePassword={hidePassword}
          setHidePassword={setHidePassword}
        />

        <TouchableOpacity style={styles.signUp} onPress={onSignUpPress}>
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
        <Button text="Continue" onPress={onContinuePress} />
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
