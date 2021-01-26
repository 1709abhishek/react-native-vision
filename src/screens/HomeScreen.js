import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>This is the fucking beginning!!!!!</Text>
      <Button
        onPress={() => {
          navigation.navigate('Component');
        }}
        title='Go to component screen'
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate('List');
        }}
        title='Go to List screen'
      ></Button>
      <Button
        onPress={() => {
          navigation.navigate('Colors');
        }}
        title='Go to Color screen'
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
