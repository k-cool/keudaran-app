import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = 'products';

const ProductsStorage = {
  async get() {
    try {
      const rawProducts = await AsyncStorage.getItem(KEY);
      if (!rawProducts) {
        throw new Error(`No saved ${KEY}`);
      }
      return JSON.parse(rawProducts);
    } catch (e) {
      throw new Error(`Failed to load ${KEY}`);
    }
  },
  async set(data) {
    try {
      await AsyncStorage.setItem(KEY, JSON.stringify(data));
    } catch (e) {
      throw new Error(`Failed to save ${KEY}`);
    }
  },
};

export default ProductsStorage;
