import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScreenNames } from "../navigation/types";
import { COLORS } from "../utils/colors";

interface IProps {}

const RentItem = ({ item, navigation }: IProps) => {
  const onPress = () => navigation.navigate(ScreenNames.Car, { item });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{`${item.brand} ${item.type}`}</Text>
        <Text style={styles.cost}>{`${item.rentingCost} kopiykas | day`}</Text>
      </View>
      <Image
        source={{
          uri: "https://maserati.scene7.com/is/image/maserati/maserati/regional/us/hero-website-new-upload/221340M_1920x1080.jpg",
        }}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default RentItem;

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
    fontWeight: "600",
    color: COLORS.black,
  },
  image: {
    height: 80,
    width: "40%",
  },
});
