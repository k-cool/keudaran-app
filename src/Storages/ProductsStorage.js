/* eslint-disable curly */

import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'products';

const ProductsStorage = {
  async initialize(data) {
    try {
      // await AsyncStorage.clear(() => {});
      let prevProducts = await AsyncStorage.getItem(KEY);
      if (!prevProducts) {
        await AsyncStorage.setItem(KEY, JSON.stringify(data));
        prevProducts = await AsyncStorage.getItem(KEY);
      }
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

  async getProduct(id) {
    try {
      const rawProducts = await AsyncStorage.getItem(KEY);
      if (!rawProducts) return null;

      const newProduct = JSON.parse(rawProducts).find(item => item.id === id);
      return newProduct;
    } catch (e) {
      console.error(e);
    }
  },

  async getNotInterestingId() {
    try {
      const rawProducts = await AsyncStorage.getItem(KEY);
      if (!rawProducts) return null;

      const notInterestingId = [];
      JSON.parse(rawProducts).forEach(item => {
        if (item.notInteresting) notInterestingId.push(item.id);
      });

      return notInterestingId;
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

  async toggleNotInteresting(id) {
    try {
      const rawProducts = await AsyncStorage.getItem(KEY);
      if (!rawProducts) return null;

      const nextProducts = JSON.parse(rawProducts).map(item => {
        if (item.id === id) {
          return {...item, notInteresting: !item.notInteresting};
        } else return item;
      });

      await AsyncStorage.setItem(KEY, JSON.stringify(nextProducts));
    } catch (e) {
      console.error(e);
    }
  },

  async resetNotInteresting() {
    try {
      const rawProducts = await AsyncStorage.getItem(KEY);
      if (!rawProducts) return null;

      const nextProducts = JSON.parse(rawProducts).map(item => {
        if (item.notInteresting) {
          return {...item, notInteresting: false};
        } else return item;
      });

      await AsyncStorage.setItem(KEY, JSON.stringify(nextProducts));
    } catch (e) {
      console.error(e);
    }
  },

  async clearProducts() {
    try {
      await AsyncStorage.removeItem(KEY);
    } catch (e) {
      console.error(e);
    }
  },
};

export default ProductsStorage;
