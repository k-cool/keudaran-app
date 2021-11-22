import React, {useState, useEffect} from 'react';
import {StyleSheet, Dimensions, View, Image} from 'react-native';
import ProductList from '../components/HomeScreen/ProductList';

import productsData from '../data/products';

const windowWidth = Dimensions.get('window').width;

const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <View style={styles.block}>
      <View style={styles.logoWrapper}>
        <Image style={styles.logo} source={require('../assets/logo.png')} />
      </View>
      <ProductList products={products} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
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

export default Home;
