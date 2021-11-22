import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import CustomedButton from '../common/CustomedButton';

const FilterList = ({filters}) => {
  const notSelected = filters.filter(filter => filter.selected === false);

  const renderItem = ({item}) => (
    <View style={styles.btnWrapper}>
      <CustomedButton title={item.name} color="#0088BA" />
    </View>
  );

  return (
    <FlatList
      style={styles.list}
      data={notSelected}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: 'row',
    padding: 5,
  },

  btnWrapper: {
    marginHorizontal: 3,
  },
});

export default FilterList;
