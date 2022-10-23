import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import NoMore from './NoMore';
import ProductItem from './ProductItem';

const ProductList = props => {
  const {products, checkNotInteresting} = props;

  const renderItem = ({item}) => (
    <ProductItem {...item} checkNotInteresting={checkNotInteresting} />
  );

  const ItemSeperatorComponent = () => <View style={styles.separator} />;
  const ListEmptyComponent = <NoMore {...props} />;

  return (
    <FlatList
      style={styles.list}
      data={products}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeperatorComponent}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={ListEmptyComponent}
    />
  );
};

const styles = StyleSheet.create({
  list: {flex: 1},

  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
  },
});

export default ProductList;
