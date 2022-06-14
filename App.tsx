import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { Navigation } from "./src/navigation/Navigation";
import store from "./src/redux/reduxStore";

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
      <StatusBar style="light" />
    </Provider>
  );
}

const styles = StyleSheet.create({});
