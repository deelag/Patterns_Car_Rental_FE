import React, { useEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  TabStackParamList,
  ScreenNames,
  RootStackParamList,
} from "../navigation/types";
import { COLORS } from "../utils/colors";
import { useDispatch, useSelector } from "react-redux";
import AgreementItem from "../components/AgreementItem";
import { getAgreeements } from "../redux/userActions";
import { AppDispatch } from "../redux/reduxStore";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Props {}

const Agreements = ({
  navigation,
}: Props &
  NativeStackScreenProps<
    TabStackParamList & RootStackParamList,
    ScreenNames.Agreements
  >) => {
  const { agreements, agreementCars } = useSelector((state: any) => state.user);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAgreeements());
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={agreementCars}
        extraData={agreementCars}
        renderItem={({ item }) => (
          <AgreementItem item={item} navigation={navigation} />
        )}
      />
    </View>
  );
};

export default Agreements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  flatList: {
    marginTop: 40,
  },
});
