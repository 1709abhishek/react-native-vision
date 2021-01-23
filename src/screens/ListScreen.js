import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const HomeScreen = () => {
  const friends = [{ name: 'abhishek' }, { name: 'jain' }, { name: 'john' }, { name: 'dagget' }];
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        return <Text style={styles.text}>{item.name}</Text>;
      }}
      keyExtractor={friend => friend.name}
    ></FlatList>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
