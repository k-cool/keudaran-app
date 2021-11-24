import {useIsFocused} from '@react-navigation/core';
import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import RecentList from '../components/RecentListScreen/RecentList';
import ProductsStorage from '../Storages/ProductsStorage';

const RecentListScreen = ({navigation}) => {
  const [recentProducts, setRecentProducts] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    ProductsStorage.getRecentProducts().then(setRecentProducts);
  }, [isFocused]);

  return (
    <View style={styles.block}>
      <RecentList recentProducts={recentProducts} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default RecentListScreen;
