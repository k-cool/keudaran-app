import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from './CheckBox';

import FilterList from './FilterList';
import SelectedFilterList from './SelectedFilterList';

const FilterBar = props => {
  const {filters, setFilters, showNotInteresting, setShowNotInteresting} =
    props;

  return (
    <View style={styles.block}>
      <Text style={styles.title}> 정렬 조건 ✔️</Text>
      <View style={styles.fiterListWrapper}>
        <Text style={styles.brand}>브랜드 👉 </Text>
        <FilterList filters={filters} />
      </View>
      <View style={styles.fiterListWrapper}>
        <SelectedFilterList filters={filters} />
      </View>
      <CheckBox
        showNotInteresting={showNotInteresting}
        setShowNotInteresting={setShowNotInteresting}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  title: {
    marginVertical: 5,
    fontSize: 20,
  },

  fiterListWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  brand: {
    fontSize: 20,
  },
});
export default FilterBar;
