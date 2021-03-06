/* eslint-disable curly */

import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'products';
const LAST = 'last';

const ProductsStorage = {
  async initialize(data) {
    try {
      const rawProducts = await AsyncStorage.getItem(KEY);
      const rawProductsLength = JSON.parse(rawProducts).length;

      if (!rawProducts || rawProductsLength !== data.length) {
        await AsyncStorage.setItem(KEY, JSON.stringify(data));
      }
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

  async getAllProductsLength() {
    try {
      const rawProducts = await AsyncStorage.getItem(KEY);
      if (!rawProducts) return null;

      return JSON.parse(rawProducts).length;
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

  async getRecentProducts() {
    try {
      const rawProducts = await AsyncStorage.getItem(KEY);
      if (!rawProducts) return null;

      const recentProducts = JSON.parse(rawProducts).filter(
        item => item.recentSee,
      );

      return recentProducts.sort(
        (a, b) =>
          b.recentSee.replaceAll(':', '') - a.recentSee.replaceAll(':', ''),
      );
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

  async setTimeStamp(id) {
    try {
      const rawProducts = await AsyncStorage.getItem(KEY);
      if (!rawProducts) return null;

      const nextProducts = JSON.parse(rawProducts).map(item => {
        if (item.id === id) {
          const now = new Date().toTimeString().slice(0, 8);
          return {...item, recentSee: now};
        } else return item;
      });

      const today = new Date().toLocaleDateString();

      await AsyncStorage.setItem(KEY, JSON.stringify(nextProducts));
      await AsyncStorage.setItem(LAST, today);
    } catch (e) {
      console.error(e);
    }
  },

  async resetTimestamp() {
    try {
      const rawProducts = await AsyncStorage.getItem(KEY);
      if (!rawProducts) return null;

      const nextProducts = JSON.parse(rawProducts).map(item => {
        if (item.recentSee) {
          delete item.recentSee;
          return item;
        } else return item;
      });

      await AsyncStorage.setItem(KEY, JSON.stringify(nextProducts));
    } catch (e) {
      console.error(e);
    }
  },

  async getLast() {
    try {
      return await AsyncStorage.getItem(LAST);
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
