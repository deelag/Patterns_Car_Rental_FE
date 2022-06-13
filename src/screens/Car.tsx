import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList, ScreenNames } from "../navigation/types";
import { COLORS } from "../utils/colors";
import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import Button from "../components/Button";

interface Props {}

const Car = ({
  navigation,
  route,
}: Props & NativeStackScreenProps<RootStackParamList, ScreenNames.Car>) => {
  const item = route.params.item;
  const onPress = () => navigation.replace(ScreenNames.Success);

  const tommorow = new Date();
  tommorow.setDate(tommorow.getDate() + 1);
  const [pickUpDate, setPickUpDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(tommorow);

  const onPickUpChange = (_: DateTimePickerEvent, selectedDate?: Date) =>
    selectedDate && setPickUpDate(selectedDate);

  const onReturnDateChange = (_: DateTimePickerEvent, selectedDate?: Date) =>
    selectedDate && setReturnDate(selectedDate);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://maserati.scene7.com/is/image/maserati/maserati/regional/us/hero-website-new-upload/221340M_1920x1080.jpg",
        }}
        style={styles.image}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{`${item.brand} ${item.type}`}</Text>
        <Text style={styles.cost}>{`${item.rentingCost} kopiykas | day`}</Text>
        <View style={styles.dateContainer}>
          <View style={styles.dateWrapper}>
            <Text style={styles.dateHeader}>Pick-up Date</Text>
            <DateTimePicker
              value={pickUpDate}
              mode="date"
              onChange={onPickUpChange}
              minimumDate={new Date()}
            />
          </View>
          <View style={styles.dateWrapper}>
            <Text style={styles.dateHeader}>Return Date</Text>
            <DateTimePicker
              value={returnDate}
              mode="date"
              onChange={onReturnDateChange}
              minimumDate={tommorow}
            />
          </View>
        </View>
        <Text style={styles.lockMoneyHeader}>Lock Money</Text>
        <Text style={styles.lockMoney}>{`1000 kopiykas`}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.total}>Total</Text>
          <View style={styles.totalAmountContainer}>
            <Text style={styles.totalAmount}>1002,50</Text>
            <Text style={styles.currency}>hryvnias</Text>
          </View>
        </View>
        <Button text="Rent a car" onPress={onPress} />
      </View>
    </View>
  );
};

export default Car;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  image: {
    height: 280,
    width: "100%",
  },
  details: {
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  title: {
    width: "60%",
    textAlign: "center",
    paddingVertical: 2,
    paddingHorizontal: 20,
    backgroundColor: COLORS.black,
    fontSize: 16,
    fontWeight: "700",
    color: COLORS.white,
  },
  cost: {
    marginTop: 20,
    fontWeight: "600",
    color: COLORS.black,
  },
  dateContainer: {
    paddingRight: 80,
    marginVertical: 40,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateWrapper: {
    width: 100,
  },
  dateHeader: {
    marginBottom: 10,
    fontWeight: "700",
    color: COLORS.black,
  },
  date: {
    marginTop: 10,
    fontWeight: "600",
    color: COLORS.black,
  },
  lockMoneyHeader: {
    marginTop: 20,
    fontSize: 17,
    fontWeight: "700",
    color: COLORS.black,
  },
  lockMoney: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: "700",
    color: COLORS.black,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingHorizontal: 24,
    backgroundColor: COLORS.black,
  },
  totalPriceContainer: {
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  total: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.white,
  },
  totalAmountContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.white,
  },
  currency: {
    marginLeft: 4,
    marginBottom: 3,
    fontSize: 12,
    fontWeight: "700",
    color: COLORS.white,
  },
});
