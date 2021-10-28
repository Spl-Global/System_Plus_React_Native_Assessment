import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import {Appcolors, Appfonts} from '../../../design/constants';
const AppTextInput = props => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.Titlestyle}>{props.title}</Text>
      </View>

      <View style={styles.textinputContainer}>
        <TextInput
          secureTextEntry={props.password ? true : false}
          placeholder={props.placeholder}
          numberOfLines={1}
          onChangeText={txt => {
            props.setvalue(txt);
          }}
          placeholderTextColor={'rgba(246, 248, 250, .5)'}
          value={props.value}
          style={styles.inputC}></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    width: '90%',
    alignSelf: 'center',
  },
  InputInnerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },

  textinputContainer: {
    marginTop: 5,
    height: 48,
    borderRadius: 12,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: Appcolors.LIGHT_GREY,
  },
  Titlestyle: {
    fontFamily: Appfonts.BOLD,
    fontSize: 18,
    marginBottom: 5,
    color: Appcolors.BLACK,
    lineHeight: 19,
  },
  inputC: {
    fontSize: 20,
    marginVertical: 0,
    marginHorizontal: 10,
    color: Appcolors.WHITE,
    fontFamily: Appfonts.BOOK,
  },
});
export default AppTextInput;
