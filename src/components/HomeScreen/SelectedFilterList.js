import React from 'react';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';

import CustomedButton from '../common/CustomedButton';

const SelectedFilterList = ({filters, toggleSelected}) => {
  const notSelected = filters.filter(filter => filter.selected === true);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.btnWrapper}
      activeOpacity={0.5}
      onPress={() => toggleSelected(item.id)}>
      <CustomedButton title={item.name} color="#0088BA" iconShown={true} />
    </TouchableOpacity>
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

export default SelectedFilterList;
