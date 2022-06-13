import React, { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { TabStackParamList, ScreenNames } from "../navigation/types";
import { COLORS } from "../utils/colors";
import RentItem from "../components/RentItem";

interface Props {}

const Rent = ({
  navigation,
}: Props & NativeStackScreenProps<TabStackParamList, ScreenNames.Rent>) => {
  const [cars, setCars] = useState([
    {
      id: 1,
      brand: "MAZDA",
      type: "VITALIKA",
      rentingCost: "20",
    },
    {
      id: 2,
      brand: "TOYOTA",
      type: "ANTONA",
      rentingCost: "5",
    },
    {
      id: 3,
      brand: "BMW",
      type: "MARKO",
      rentingCost: "10",
    },
    {
      id: 4,
      brand: "DDDD",
      type: "AAAA",
      rentingCost: "1",
    },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={cars}
        renderItem={({ item }) => (
          <RentItem item={item} navigation={navigation} />
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
