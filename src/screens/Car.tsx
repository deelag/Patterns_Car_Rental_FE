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
import { useDispatch } from "react-redux";
import { rentACar } from "../redux/userActions";
import { AppDispatch } from "../redux/reduxStore";

interface Props {}

const Car = ({
  navigation,
  route,
}: Props & NativeStackScreenProps<RootStackParamList, ScreenNames.Car>) => {
  const { item } = route.params;

  const dispatch = useDispatch<AppDispatch>();

  const rentalCostInHryvnias = item.rentalCost.hryvnias;
  const lockMoney = rentalCostInHryvnias * 0.05;
  const initialTotalAmount =
    rentalCostInHryvnias +
    lockMoney +
    Math.round(item.rentalCost.kopiykas / 100);

  const [totalAmount, setTotalAmount] = useState(initialTotalAmount);

  const tommorow = new Date();
  tommorow.setDate(tommorow.getDate() + 1);

  const [pickUpDate, setPickUpDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(tommorow);

  const onPickUpChange = (_: DateTimePickerEvent, selectedDate?: Date) =>
    selectedDate && setPickUpDate(selectedDate);

  const onReturnDateChange = (_: DateTimePickerEvent, selectedDate?: Date) => {
    if (selectedDate) {
      const numberOfDays = selectedDate.getDate() - pickUpDate.getDate();

      setTotalAmount(initialTotalAmount * numberOfDays);
      setReturnDate(selectedDate);
    }
  };

  const onPress = () => {
    dispatch(
      rentACar(item.id, {
        issueingDate: pickUpDate.getTime(),
        expectedReturnDate: returnDate.getTime(),
      })
    );

    navigation.replace(ScreenNames.Success);
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: item.photo }} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.title}>{`${item.brand} ${item.type}`}</Text>
        <Text
          style={styles.cost}
        >{`${rentalCostInHryvnias} hryvnias | day`}</Text>
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
        <Text style={styles.lockMoney}>{`${lockMoney} hryvnias`}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.totalPriceContainer}>
          <Text style={styles.total}>Total</Text>
          <View style={styles.totalAmountContainer}>
            <Text style={styles.totalAmount}>{totalAmount}</Text>
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
