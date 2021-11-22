import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {addComma} from '../../utils/NumberUtils';

const RecentItem = ({id, title, brand, price}) => {
  return (
    <View style={styles.block}>
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
    </View>
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
    fontSize: 15,
  },
});

export default RecentItem;
