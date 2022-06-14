import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  TabStackParamList,
  ScreenNames,
  RootStackParamList,
} from "../navigation/types";
import { COLORS } from "../utils/colors";
import RentItem from "../components/RentItem";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../redux/reduxStore";
import { getCars } from "../redux/userActions";
import { ICar } from "../redux/interfaces";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {}

const Rent = ({
  navigation,
}: Props &
  NativeStackScreenProps<
    TabStackParamList & RootStackParamList,
    ScreenNames.Rent
  >) => {
  const { cars } = useSelector((state: any) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getCars());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={cars}
        extraData={cars}
        renderItem={({ item }) => (
          <RentItem item={item as ICar} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Rent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  flatList: {
    marginTop: 40,
  },
});
