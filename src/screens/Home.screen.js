/* eslint-disable curly */

import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import FilterBar from '../components/HomeScreen/FilterBar';
import ProductList from '../components/HomeScreen/ProductList';

import ProductsStorage from '../Storages/ProductsStorage';
import productsData from '../data/productsData';
import filtersData from '../data/filtersData';

const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState(filtersData);
  const [showNotInteresting, setShowNotInteresting] = useState(false);

  useEffect(() => {
    ProductsStorage.initialize(productsData)
      .then(setProducts)
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (showNotInteresting) ProductsStorage.getAll().then(setProducts);
    else ProductsStorage.getWithoutNotInteresting().then(setProducts);
  }, [showNotInteresting]);

  // useEffect(() => {
  //   const selectedFilters = filters.filter(filter => filter.selected);
  //   const nextProducts = [];
  //   if (selectedFilters.length !== 0) {
  //     for (let i = 0; i < products.length; i++)
  //       for (let j = 0; j < selectedFilters.length; j++)
  //         if (products[i].brand === selectedFilters[j].name)
  //           nextProducts.push(products[i]);
  //     setProducts(nextProducts);
  //   } else setProducts(productsData);
  // }, [filters, products]);

  const toggleSelected = id => {
    const nextFilter = filters.map(brand =>
      brand.id === id ? {...brand, selected: !brand.selected} : brand,
    );
    setFilters(nextFilter);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <View>
          <FilterBar
            filters={filters}
            toggleSelected={toggleSelected}
            showNotInteresting={showNotInteresting}
            setShowNotInteresting={setShowNotInteresting}
          />
          <ProductList products={products} navigation={navigation} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Home;
