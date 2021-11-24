import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {addComma} from '../../utils/NumberUtils';

const ProductItem = props => {
  const {id, title, brand, price, checkNotInteresting} = props;

  return (
    <TouchableOpacity
      style={styles.block}
      activeOpacity={0.5}
      onPress={() => checkNotInteresting(id)}>
      <FastImage
        style={styles.icon}
        source={require('../../assets/dinoIcon.png')}
        resizeMode={FastImage.resizeMode.contain}
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
    fontSize: 15,
  },
});

export default ProductItem;
