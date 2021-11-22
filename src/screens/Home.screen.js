import React from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.block}>
      <Text>Home screen</Text>
      <Button title="Detail" onPress={() => navigation.push('Detail')} />
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default Home;
