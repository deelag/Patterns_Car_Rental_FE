import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login";
import {
  AuthStackParamList,
  RootStackParamList,
  ScreenNames,
  TabStackParamList,
} from "./types";
import SignUp from "../screens/SignUp";
import { COLORS } from "../utils/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Rent from "../screens/Rent";
import Car from "../screens/Car";
import Success from "../screens/Success";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        <RootStack.Screen name={ScreenNames.TabNav} component={TabNavigator} />
        <RootStack.Screen
          name={ScreenNames.Car}
          component={Car}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: COLORS.white,
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "800",
            },
          }}
        />
        <RootStack.Screen
          name={ScreenNames.Success}
          component={Success}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: COLORS.white,
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: "800",
            },
          }}
        />
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
      <AuthStack.Screen
        name={ScreenNames.SignUp}
        component={SignUp}
        options={{ title: "SIGN UP" }}
      />
    </AuthStack.Navigator>
  );
};

const TabStack = createBottomTabNavigator<TabStackParamList>();

// TODO: don't repeat code
const TabNavigator = () => {
  return (
    <TabStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: COLORS.white,
        headerTitleStyle: {
          fontSize: 24,
          fontWeight: "800",
        },
        tabBarStyle: {
          backgroundColor: COLORS.primary,
        },
        tabBarActiveTintColor: COLORS.secondary,
        tabBarInactiveTintColor: COLORS.white,
      }}
    >
      <TabStack.Screen name={ScreenNames.Rent} component={Rent} />
    </TabStack.Navigator>
  );
};
