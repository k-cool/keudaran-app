import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Image} from 'react-native';

import {addComma} from '../../utils/NumberUtils';

const ProductItem = ({id, title, brand, price}) => {
  return (
    <TouchableOpacity style={styles.block} activeOpacity={0.5}>
      <Image
        style={styles.icon}
        source={require('../../assets/dinoIcon.png')}
      />
      <View style={styles.description}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.secondLine}>
          <Text style={styles.brand}>{brand}</Text>
          <Text style={styles.price}>{addComma(price) + ' 원'}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },

  icon: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    resizeMode: 'contain',
  },

  description: {
    flex: 1,
    padding: 10,
  },

  title: {
    fontSize: 18,
  },

  secondLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },

  brand: {
    fontWeight: '600',
  },

  price: {
    // marginRight: 10,
    fontSize: 15,
  },
});

export default ProductItem;
