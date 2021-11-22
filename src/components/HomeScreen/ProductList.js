import React from 'react';
import {StyleSheet, FlatList, View, Image, Dimensions} from 'react-native';
import ProductItem from './ProductItem';

const windowWidth = Dimensions.get('window').width;

const ProductList = ({products, navigation}) => {
  const ListHeader = (
    <View style={styles.logoWrapper}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
    </View>
  );

  return (
    <FlatList
      style={styles.list}
      data={products}
      renderItem={({item}) => <ProductItem {...item} navigation={navigation} />}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      ListHeaderComponent={ListHeader}
    />
  );
};

const styles = StyleSheet.create({
  list: {},

  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
  },

  logoWrapper: {
    overflow: 'hidden',
  },

  logo: {
    width: windowWidth,
    height: 80,
    resizeMode: 'contain',
  },
});

export default ProductList;
