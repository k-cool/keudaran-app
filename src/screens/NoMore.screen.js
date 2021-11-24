import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CustomedButton from '../components/common/CustomedButton';
import ProductsStorage from '../Storages/ProductsStorage';

const NoMore = props => {
  const {navigation, updateHomeScreen, filters, showNotInteresting} = props;
  const onResetBtnPressed = () => {
    ProductsStorage.resetNotInteresting().then(() =>
      updateHomeScreen(filters, showNotInteresting),
    );
  };

  return (
    <View style={styles.block}>
      <Text style={styles.text}>모든 상품이 관심없음이 되었어요!🥲</Text>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.5}
        onPress={onResetBtnPressed}>
        <CustomedButton title="관심없음 초기화하기" color="green" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },

  text: {
    fontSize: 22,
    marginVertical: 20,
  },

  btn: {
    marginTop: 10,
  },
});

export default NoMore;
