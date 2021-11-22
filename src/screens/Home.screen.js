/* eslint-disable curly */

import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import FilterBar from '../components/HomeScreen/FilterBar';
import ProductList from '../components/HomeScreen/ProductList';

import productsData from '../data/productsData';
import filtersData from '../data/filtersData';

const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState(filtersData);
  const [showNotInteresting, setShowNotInteresting] = useState(false);

  useEffect(() => {
    const selectedFilters = filters.filter(filter => filter.selected);
    if (selectedFilters.length !== 0) {
      const nextProducts = [];
      for (let i = 0; i < productsData.length; i++)
        for (let j = 0; j < selectedFilters.length; j++)
          if (productsData[i].brand === selectedFilters[j].name)
            nextProducts.push(productsData[i]);
      setProducts(nextProducts);
    } else setProducts(productsData);
  }, [filters]);

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
