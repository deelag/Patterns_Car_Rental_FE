import React, { useEffect } from "react";
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
import Agreements from "../screens/Agreements";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setAuthToken } from "../redux/userActions";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const Navigation = () => {
  const { authToken } = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const setToken = async () => {
      const token = await AsyncStorage.getItem("authToken");

      if (token) {
        dispatch(setAuthToken(token));
      }
    };

    setToken();
  }, []);

  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {authToken ? (
          <>
            <RootStack.Screen
              name={ScreenNames.TabNav}
              component={TabNavigator}
            />
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
          </>
        ) : (
          <RootStack.Screen
            name={ScreenNames.AuthNav}
            component={AuthNavigator}
          />
        )}
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
      <TabStack.Screen name={ScreenNames.Agreements} component={Agreements} />
    </TabStack.Navigator>
  );
};
