import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Appcolors, Appfonts} from '../../constants';

const AppHeader = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    elevation: 5,
    shadowColor: 'black',
    shadowOpacity: 0.7,
    shadowOffset: {height: 1, width: 0},
    height: '8%',
    backgroundColor: Appcolors.WHITE,
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Appfonts.BOLD,
    color: Appcolors.DARK_GREY,
  },
});

export default AppHeader;
