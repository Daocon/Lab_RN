import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "./action";

const Product = ({ products }) => {
  const dispatch = useDispatch(); //phan phoi trang thai

  return (
    <View>
      {products.map((product) => {
        return (
          <View key={product.id}>
            <Text>{product.name}</Text>
            <Button
              title="Add to cart"
              onPress={() => dispatch(addItem(product))}
            />
          </View>
        );
      })}
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({});
