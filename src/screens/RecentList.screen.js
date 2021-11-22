import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import productsData from '../data/productsData';
import RecentList from '../components/RecentListScreen/RecentList';

const RecentListScreen = ({navigation}) => {
  const [recentProducts, setRecentProducts] = useState([]);

  useEffect(() => {
    setRecentProducts(productsData);
  }, []);

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
