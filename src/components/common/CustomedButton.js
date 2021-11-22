import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const CustomedButton = ({title, color, bgColor, onPress, iconShown}) => {
  const custumStyle = {
    color: color,
    backgroundColor: bgColor,
    borderColor: color,
  };

  const blockStyle = [styles.block, custumStyle];
  const titleStyle = [styles.title, custumStyle];
  return (
    <TouchableOpacity onPress={() => onPress} activeOpacity={0.5}>
      <View style={blockStyle}>
        <View style={styles.contentsWrapper}>
          <Text style={titleStyle}>{title}</Text>
          {iconShown && (
            <Icon style={styles.icon} name="times" size={15} color={color} />
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  block: {
    alignSelf: 'flex-start',
    flexShrink: 0,
    padding: 5,
    borderWidth: 1.5,
    borderRadius: 30,
  },

  contentsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
  },

  title: {
    marginRight: 5,
    paddingBottom: 1,
    fontSize: 18,
  },

  icon: {},
});

export default CustomedButton;
