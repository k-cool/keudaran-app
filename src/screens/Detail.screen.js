import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';

import CustomedButton from '../components/common/CustomedButton';

const windowWidth = Dimensions.get('window').width;

const Detail = ({route}) => {
  const [product, setProduct] = useState({
    id: 1,
    title: '중고 나이키 테아 흰검 245',
    brand: '나이키',
    price: 30000,
  });

  const {id, title, brand, price} = product;

  return (
    <View style={styles.block}>
      <Text style={styles.title}>{title}</Text>
      <Text>{route.params.id}</Text>
      <Image style={styles.img} source={require('../assets/dinoIcon.png')} />
      <View style={styles.firstLine}>
        <Text style={styles.text}>{`브랜드 : ${brand}`}</Text>
      </View>
      <View style={styles.secondLine}>
        <Text style={styles.text}>{`가격 : ${price}`}</Text>
      </View>
      <View style={styles.notInterestingBtn}>
        <CustomedButton title="관심없어요😅" color="#97B1AB" />
      </View>
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
