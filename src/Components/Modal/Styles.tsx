import {StyleSheet, Dimensions} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    margin: 20,
    padding: 16,
    backgroundColor: 'white',
    height: Dimensions.get('screen').height * 0.5,
  },
});
