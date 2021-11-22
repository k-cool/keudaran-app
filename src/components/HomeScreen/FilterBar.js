import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FilterList from './FilterList';
import SelectedFilterList from './SelectedFilterList';

const windowWidth = Dimensions.get('window').width;

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
      <View style={styles.notInteresting}>
        <TouchableOpacity
          style={styles.checkBoxWrapper}
          activeOpacity={0.5}
          onPress={() => setShowNotInteresting(!showNotInteresting)}>
          <Text>관심없음 상품 보기</Text>
          {showNotInteresting ? (
            <Icon name="checkbox-marked" size={15} color="#009988" />
          ) : (
            <Icon name="checkbox-blank-outline" size={15} />
          )}
        </TouchableOpacity>
      </View>
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

  notInteresting: {
    width: windowWidth,
    alignItems: 'flex-end',
  },

  checkBoxWrapper: {
    flexDirection: 'row',
    marginRight: 10,
  },
});
export default FilterBar;
