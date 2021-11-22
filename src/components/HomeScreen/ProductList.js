import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import ProductItem from './ProductItem';

const ProductList = ({products}) => {
  return (
    <FlatList
      style={styles.list}
      data={products}
      renderItem={({item}) => <ProductItem {...item} />}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {},

  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
  },
});

export default ProductList;
