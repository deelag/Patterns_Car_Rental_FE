import React from "react";
import {
  KeyboardType,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import Animated from "react-native-reanimated";
import { useInput } from "../hooks/useInput";
import { COLORS } from "../utils/colors";
import EyeIcon from "./EyeIcon";

interface IProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType: KeyboardType;
  styles?: ViewStyle;
  password?: boolean;
  showPassword?: boolean;
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Input = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  styles,
  password,
  showPassword,
  setShowPassword,
}: IProps) => {
  const { handleBlur, handleFocus, placeHolderStyle } = useInput({ value });

  return (
    <View style={[stylesInput.component, styles]}>
      <Animated.Text style={[stylesInput.placeholder, placeHolderStyle]}>
        {placeholder}
      </Animated.Text>
      {/* TODO: FIX THE ICON */}
      {password && (
        <Pressable style={stylesInput.renderIcon}>
          <EyeIcon height={30} width={30} />
        </Pressable>
      )}
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        keyboardType={keyboardType}
        style={stylesInput.textInput}
        secureTextEntry={showPassword}
        keyboardAppearance="light"
      />
      <View style={stylesInput.textInputLine} />
    </View>
  );
};

export default Input;

export const stylesInput = StyleSheet.create({
  component: {
    paddingTop: 22,
    flex: 1,
  },
  placeholder: {
    position: "absolute",
    left: 0,
    fontWeight: "800",
    color: COLORS.white,
  },
  textInput: {
    height: 30,
    fontSize: 15,
    fontWeight: "800",
    color: COLORS.white,
    paddingBottom: 2,
    backgroundColor: "transparent",
  },
  textInputLine: {
    height: 1,
    width: "100%",
    backgroundColor: COLORS.white,
  },
  renderIcon: {
    position: "absolute",
    right: 5,
    top: 30,
  },
});
