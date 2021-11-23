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
    ProductsStorage.initialize(productsData).catch(console.error);
  }, []);

  useEffect(() => {
    ProductsStorage.getAll().then(result => {
      let allList = result;

      if (!showNotInteresting)
        allList = allList.filter(item => !item.notInteresting);

      const selectedFilters = filters.filter(filter => filter.selected);
      const nextProducts = [];

      if (selectedFilters.length !== 0) {
        for (let i = 0; i < allList.length; i++)
          for (let j = 0; j < selectedFilters.length; j++)
            if (allList[i].brand === selectedFilters[j].name)
              nextProducts.push(allList[i]);

        return setProducts(nextProducts);
      }
      setProducts(allList);
    });
  }, [filters, showNotInteresting]);

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
