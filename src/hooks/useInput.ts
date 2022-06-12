import { useEffect, useMemo, useRef, useState } from "react";
import {
  Animated,
  StyleProp,
  ViewStyle,
  TextStyle,
  TextInput,
} from "react-native";
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface IProps {
  value: string;
}

export const useInput = ({ value }: IProps) => {
  const [isFocused, setFocused] = useState(false);
  const placeholderAnimation = useSharedValue(0);

  const placeHolderStyle = useAnimatedStyle(() => {
    const top = interpolate(placeholderAnimation.value, [0, 1], [28, 0]);
    const fontSize = interpolate(placeholderAnimation.value, [0, 1], [15, 11]);
    const opacity = interpolate(placeholderAnimation.value, [0, 1], [1, 0.7]);

    return {
      top,
      fontSize,
      opacity,
    };
  });

  const handleFocus = () => setFocused(true);
  const handleBlur = () => setFocused(false);

  useEffect(() => {
    if (isFocused) {
      placeholderAnimation.value = withTiming(1);
    }
  }, [isFocused]);

  return {
    placeHolderStyle,
    handleFocus,
    handleBlur,
  };
};
