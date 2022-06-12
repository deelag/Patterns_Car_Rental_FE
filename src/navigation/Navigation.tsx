import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import { AuthStackParamList, RootStackParamList, ScreenNames } from "./types";
import SignUp from "../screens/SignUp";
import { COLORS } from "../utils/colors";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen
          name={ScreenNames.AuthNav}
          component={AuthNavigator}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: "800",
        },
      }}
    >
      <AuthStack.Screen
        name={ScreenNames.Login}
        component={Login}
        options={{ title: "LOGIN" }}
      />
      <AuthStack.Screen name={ScreenNames.SignUp} component={SignUp} />
    </AuthStack.Navigator>
  );
};
