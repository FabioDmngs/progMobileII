import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const ProductCard = ({ product, onPress }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} />
      <Text style={styles.name}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Button title="Ver Detalhes" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 10,
    padding: 15,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  price: {
    fontSize: 16,
    color: 'green',
    marginTop: 5,
  },
});

export default ProductCard;
