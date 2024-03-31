import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Product from "./Product";
import Cart from "./Cart";

const products = [
  { id: 1, name: "Product 1" },
  { id: 2, name: "Product 2" },
  { id: 3, name: "Product 3" },
];

const AppDemo6 = () => {
  return (
    <Provider store={store}>
      <View>
        <Product products={products} />
        <Cart />
      </View>
    </Provider>
  );
};

export default AppDemo6;

const styles = StyleSheet.create({});
