// components/AddToCart.js
import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const AddToCart = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon name="cart-outline" size={24} color="#000" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
});

export default AddToCart;
