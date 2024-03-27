import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import GD from "./viewApp";
import store from "./store";

const AppDemo5 = () => {
  return (
    <Provider store={store}>
      <GD />
    </Provider>
  );
};

export default AppDemo5;

const styles = StyleSheet.create({});
