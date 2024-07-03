// screens/CartScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckoutProduct from '../components/CheckoutProduct';

const CartScreen = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCartItems = async () => {
      const savedCartItems = await AsyncStorage.getItem('cartItems');
      if (savedCartItems) {
        setCartItems(JSON.parse(savedCartItems));
      }
    };
    loadCartItems();
  }, []);

  const removeFromCart = async (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    await AsyncStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CheckoutProduct product={item} onRemoveFromCart={removeFromCart} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default CartScreen;
