/* eslint-disable curly */

import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import ProductsStorage from '../Storages/ProductsStorage';
import {addComma} from '../utils/NumberUtils';

import CustomedButton from '../components/common/CustomedButton';

const windowWidth = Dimensions.get('window').width;
let LENGTH = 0;

const Detail = ({route, navigation}) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    updateDetailScreen(route.params.id);
  }, [route.params.id]);

  const updateDetailScreen = async _id => {
    const productData = await ProductsStorage.getProduct(_id);
    setProduct(productData);
    await ProductsStorage.setTimeStamp(_id);
  };

  const generateRandomNum = () => {
    return Math.floor(Math.random() * LENGTH) + 1;
  };

  const goToRandomDetail = async id => {
    LENGTH = await ProductsStorage.getAllProductsLength();
    await ProductsStorage.toggleNotInteresting(id);

    const notInterestingArr = await ProductsStorage.getNotInterestingId();
    if (notInterestingArr.length === LENGTH) return navigation.navigate('Home');

    let randomNum = generateRandomNum();

    while (notInterestingArr.includes(randomNum))
      randomNum = generateRandomNum();

    navigation.navigate('Detail', {id: randomNum});
  };

  const {id, title, brand, price} = product;

  return (
    <View style={styles.block}>
      <Text style={styles.title}>{title}</Text>
      <Text>{route.params.id}</Text>
      <Image style={styles.img} source={require('../assets/dinoIcon.png')} />
      <View style={styles.firstLine}>
        <Text style={styles.text}>{'브랜드 : ' + brand}</Text>
      </View>
      <View style={styles.secondLine}>
        <Text style={styles.text}>{'가격 : ' + addComma(price) + '원'}</Text>
      </View>
      <TouchableOpacity
        style={styles.notInterestingBtn}
        activeOpacity={0.5}
        onPress={() => goToRandomDetail(id)}>
        <CustomedButton title="관심없어요😅" color="#97B1AB" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    marginVertical: 10,
    fontSize: 25,
  },

  img: {
    width: windowWidth * 0.8,
    height: windowWidth * 0.8,
    padding: 20,
    resizeMode: 'contain',
  },

  firstLine: {
    padding: 10,
  },

  secondLine: {
    padding: 10,
  },

  text: {
    fontSize: 20,
  },

  notInterestingBtn: {
    marginTop: 10,
    marginRight: 5,
  },
});

export default Detail;
