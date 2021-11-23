/* eslint-disable curly */

import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'products';
const ProductsStorage = {
  async initialize(data) {
    try {
      const prevProducts = await AsyncStorage.getItem(KEY);
      if (!prevProducts) await AsyncStorage.setItem(KEY, JSON.stringify(data));
      const newProducts = JSON.parse(prevProducts).filter(
        item => !item.notInteresting,
      );
      return newProducts;
    } catch (e) {
      console.error(e);
    }
  },
  async getAll() {
    try {
      const rawProducts = await AsyncStorage.getItem(KEY);
      return !rawProducts ? null : JSON.parse(rawProducts);
    } catch (e) {
      console.error(e);
    }
  },
  async getWithoutNotInteresting() {
    try {
      const rawProducts = await AsyncStorage.getItem(KEY);
      if (!rawProducts) return null;

      const newProducts = JSON.parse(rawProducts).filter(
        item => !item.notInteresting,
      );
      return newProducts;
    } catch (e) {
      console.error(e);
    }
  },

  async set(data) {
    try {
      await AsyncStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {
      console.error(e);
    }
  },
  async clear() {
    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.error(e);
    }
  },
};

export default ProductsStorage;
