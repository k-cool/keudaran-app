import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const windowWidth = Dimensions.get('window').width;

const CheckBox = ({showNotInteresting, setShowNotInteresting}) => {
  const onPress = () => setShowNotInteresting(!showNotInteresting);

  return (
    <View style={styles.notInteresting}>
      <TouchableOpacity
        style={styles.checkBoxWrapper}
        activeOpacity={0.5}
        onPress={onPress}>
        <Text>관심없음 상품 보기</Text>
        {showNotInteresting ? (
          <Icon name="checkbox-marked" size={15} color="#009988" />
        ) : (
          <Icon name="checkbox-blank-outline" size={15} />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  notInteresting: {
    width: windowWidth,
    alignItems: 'flex-end',
  },

  checkBoxWrapper: {
    flexDirection: 'row',
    marginRight: 10,
  },
});

export default CheckBox;
