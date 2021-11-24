/* eslint-disable curly */

import React, {useState, useEffect} from 'react';
import {StyleSheet, Alert, Dimensions} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

import FilterBar from '../components/HomeScreen/FilterBar';
import ProductList from '../components/HomeScreen/ProductList';

import ProductsStorage from '../Storages/ProductsStorage';
import productsData from '../data/productsData';
import filtersData from '../data/filtersData';
import FastImage from 'react-native-fast-image';
import {useIsFocused} from '@react-navigation/core';

const windowWidth = Dimensions.get('window').width;

const Home = ({navigation}) => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState(filtersData);
  const [showNotInteresting, setShowNotInteresting] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    ProductsStorage.initialize(productsData).catch(console.error);
  }, []);

  useEffect(() => {
    updateHomeScreen(filters, showNotInteresting);
  }, [filters, showNotInteresting, isFocused]);

  const updateHomeScreen = (_filters, _showNotInteresting) => {
    ProductsStorage.getAll().then(result => {
      let allList = result;

      if (!_showNotInteresting)
        allList = allList.filter(item => !item.notInteresting);

      const selectedFilters = _filters.filter(filter => filter.selected);
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
  };

  const toggleSelected = id => {
    const nextFilter = filters.map(brand =>
      brand.id === id ? {...brand, selected: !brand.selected} : brand,
    );
    setFilters(nextFilter);
  };

  const checkNotInteresting = id => {
    const isNotInteresting = products.find(
      item => item.id === id,
    ).notInteresting;

    if (isNotInteresting)
      return Alert.alert(
        '관심없는 상품',
        '관심없는 상품리스트에 등록된 상품입니다.',
        [{text: '취소', onPress: () => {}, style: 'cancel'}],
        {cancelable: true, onDismiss: () => {}},
      );

    navigation.push('Detail', {id: id});
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <FastImage
          style={styles.logo}
          source={require('../assets/logo.png')}
          resizeMode={FastImage.resizeMode.contain}
        />
        <FilterBar
          filters={filters}
          toggleSelected={toggleSelected}
          setShowNotInteresting={setShowNotInteresting}
        />
        <ProductList
          products={products}
          filters={filters}
          showNotInteresting={showNotInteresting}
          checkNotInteresting={checkNotInteresting}
          updateHomeScreen={updateHomeScreen}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },

  logo: {
    width: windowWidth,
    height: 80,
  },
});

export default Home;
