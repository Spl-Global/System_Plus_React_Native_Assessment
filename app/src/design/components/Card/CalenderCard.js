import React from 'react';
import {View, Text, Image, StyleSheet, StatusBar} from 'react-native';
import {Appcolors, icons} from '../../constants';
import CustomIcon from '../Icon/CustomIcon';
import styles from './CardStyle';
const CalenderCard = props => {
  const [colorStyle, LightthemeColor] =
    props.status == 'Approved'
      ? [Appcolors.GREEN, Appcolors.LIGHT_GREEN]
      : props.status == 'Pending'
      ? [Appcolors.WARNING, Appcolors.LIGHT_WARNING]
      : props.status == 'Buyer Reschedule'
      ? [Appcolors.PRIMARY, Appcolors.LIGHT_PRIMARY]
      : [Appcolors.PRIMARY, Appcolors.LIGHT_PRIMARY];

  return (
    <View style={styles.cardContainer}>
      <View>
        <View
          style={{
            ...styles.outerLightCircle,
            ...{backgroundColor: LightthemeColor},
          }}>
          <View
            style={{
              ...styles.innerSolidCircle,
              ...{backgroundColor: colorStyle},
            }}></View>
        </View>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeAtstyle}>{props.timeAt}</Text>
        <Text style={styles.timeStyle}>({props.time})</Text>
      </View>
      <View style={{...styles.cardStyle, ...{backgroundColor: colorStyle}}}>
        <View style={styles.dataContainer}>
          <View style={styles.locationContainer}>
            <CustomIcon
              style={styles.iconContainer}
              imgStyle={styles.imgStyle}
              source={icons.LOCATION}></CustomIcon>
            <Text style={styles.locationText}>{props.location}</Text>
          </View>
          <View style={styles.nameContainer}>
            <View style={styles.profileContainer}>
              <Image
                style={styles.imgStyle}
                resizeMode="cover"
                source={props.imgUri}></Image>
            </View>

            <Text style={styles.nameStyle}>{props.name}</Text>
          </View>
          <View style={styles.statusContainer}>
            <Text style={{...styles.statusText, ...{color: colorStyle}}}>
              {props.status}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default CalenderCard;
