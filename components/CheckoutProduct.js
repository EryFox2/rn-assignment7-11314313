// components/CheckoutProduct.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RemoveFromCart from './RemoveFromCart';

const CheckoutProduct = ({ product, onRemoveFromCart }) => {
  return (
    <View style={styles.product}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <RemoveFromCart onPress={() => onRemoveFromCart(product.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
  },
  price: {
    fontSize: 16,
  },
});

export default CheckoutProduct;
