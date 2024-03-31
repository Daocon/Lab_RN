//b4
import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "./action";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items); // truy cap trang thai tu store
  const dispatch = useDispatch();
  return (
    <View>
      {cartItems.map((item) => {
        return (
          <View key={item.id}>
            <Text>
              {item.name} - {item.quantity}
            </Text>
            <Button
              title="Xoa khoi gio hang"
              onPress={() => dispatch(removeItem(item))}
            />
          </View>
        );
      })}
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
