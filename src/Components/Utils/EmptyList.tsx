import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const EmptyListScreen = ({message}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.emptyText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: 'gray',
  },
});

export default EmptyListScreen;
