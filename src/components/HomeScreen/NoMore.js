import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CustomedButton from '../common/CustomedButton';
import ProductsStorage from '../../Storages/ProductsStorage';

const NoMore = props => {
  const {updateHomeScreen, filters, showNotInteresting, loading} = props;
  const onResetBtnPressed = () => {
    ProductsStorage.resetNotInteresting().then(() =>
      updateHomeScreen(filters, showNotInteresting),
    );
  };

  return (
    <View style={styles.block}>
      {!loading && (
        <>
          <Text style={styles.title}>🗑</Text>
          <Text style={styles.text}>리스트가 비었어요!😧</Text>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.5}
            onPress={onResetBtnPressed}>
            <CustomedButton title="관심없음 초기화하기" color="green" />
          </TouchableOpacity>
        </>
      )}
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

  title: {
    marginVertical: 50,
    fontSize: 150,
  },

  text: {
    fontSize: 22,
    marginBottom: 20,
  },

  btn: {
    marginTop: 10,
  },
});

export default NoMore;
