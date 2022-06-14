import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  RootStackParamList,
  ScreenNames,
  TabStackParamList,
} from "../navigation/types";
import { ICar } from "../redux/interfaces";
import { COLORS } from "../utils/colors";

interface IProps {
  item: ICar;
  navigation: NativeStackNavigationProp<
    TabStackParamList & RootStackParamList,
    ScreenNames.Agreements
  >;
}

const AgreementItem = ({ item, navigation }: IProps) => {
  const pickUpDate = new Date(item.agreements[0].issueingDate)
    .toISOString()
    .slice(0, 10);
  const returnDate = new Date(item.agreements[0].expectedReturnDate)
    .toISOString()
    .slice(0, 10);

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{`${item.brand} ${item.type}`}</Text>
        <Text
          style={styles.cost}
        >{`${item.rentalCost.hryvnias} hryvnias`}</Text>
        <View style={styles.dateContainer}>
          <View>
            <Text style={styles.dateHeader}>Pick-up Date</Text>
            <Text style={styles.date}>{pickUpDate}</Text>
          </View>
          <View>
            <Text style={styles.dateHeader}>Return Date</Text>
            <Text style={styles.date}>{returnDate}</Text>
          </View>
        </View>
      </View>
      <Image
        source={{
          uri: item.photo,
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default AgreementItem;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 22,
    paddingHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 2,
    borderTopColor: COLORS.grey,
  },
  textContainer: {
    width: "52%",
  },
  title: {
    textAlign: "center",
    paddingHorizontal: 20,
    backgroundColor: COLORS.black,
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.white,
  },
  cost: {
    marginTop: 20,
    marginBottom: 20,
    fontWeight: "600",
    color: COLORS.black,
  },
  dateContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateHeader: {
    fontWeight: "700",
    color: COLORS.black,
  },
  date: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: "700",
    color: COLORS.black,
  },
  image: {
    height: 80,
    width: "40%",
  },
});
