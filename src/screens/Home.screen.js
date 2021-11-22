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
    setProducts(productsData);
  }, []);

  // const {top} = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        {/* <View style={{height: top}} /> */}
        <View>
          <FilterBar
            filters={filters}
            setFilters={setFilters}
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
