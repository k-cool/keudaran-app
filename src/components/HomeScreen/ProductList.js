import React from 'react';
import {StyleSheet, FlatList, View, Image, Dimensions} from 'react-native';
import ProductItem from './ProductItem';

const windowWidth = Dimensions.get('window').width;

const ProductList = ({products, navigation}) => {
  const renderItem = ({item}) => (
    <ProductItem {...item} navigation={navigation} />
  );

  const ItemSeperatorComponent = () => <View style={styles.separator} />;

  const ListHeader = (
    <View style={styles.logoWrapper}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
    </View>
  );

  return (
    <FlatList
      style={styles.list}
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeperatorComponent}
      ListHeaderComponent={ListHeader}
      showsVerticalScrollIndicator={false}
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
