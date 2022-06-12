import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Navigation } from "./src/navigation/Navigation";

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="light" />
    </>
  );
}

const styles = StyleSheet.create({});
