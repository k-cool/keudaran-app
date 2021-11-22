import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import CustomedButton from '../components/common/CustomedButton';
import ProductList from '../components/HomeScreen/ProductList';

import productsData from '../data/products';

const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <View style={styles.block}>
      <CustomedButton title="나이키" color="#009988" iconShown={true} />
      <ProductList products={products} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Home;
