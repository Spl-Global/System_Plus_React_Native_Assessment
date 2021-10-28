import React from 'react';
import {View, Image} from 'react-native';

const CustomIcon = props => {
  return (
    <View style={props.style}>
      <Image style={props.imgStyle} source={props.source}></Image>
    </View>
  );
};
export default CustomIcon;
