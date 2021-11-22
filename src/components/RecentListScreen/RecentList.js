import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import RecentItem from './RecentItem';

const RecentList = ({recentProducts}) => {
  const renderItem = ({item}) => <RecentItem {...item} />;

  const ItemSeparatorComponent = () => <View style={styles.separator} />;

  return (
    <FlatList
      style={styles.list}
      data={recentProducts}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      ItemSeparatorComponent={ItemSeparatorComponent}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {},

  separator: {
    height: 1,
    backgroundColor: 'lightgrey',
  },
});

export default RecentList;
