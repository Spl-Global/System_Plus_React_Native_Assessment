import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import CalenderCard from '../../components/Card/CalenderCard';
import {Appcolors, Appfonts} from '../../constants';
const ListViewer = props => {
  const list = () => {
    return props.RawData.map(itemData => {
      return (
        <CalenderCard
          key={itemData.id}
          name={itemData.name}
          location={itemData.location}
          imgUri={itemData.imgUri}
          status={itemData.staus}
          timeAt={itemData.TimeAt}
          time={itemData.time}></CalenderCard>
      );
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.dayNameStyle}>
          {props.day}
          {'  '}
          <Text style={styles.monthNameStyle}>{props.date}</Text>
        </Text>
      </View>
      <View>{list()}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  dateContainer: {
    marginBottom: 24,
  },
  dayNameStyle: {
    fontSize: 20,
    lineHeight: 28,
    fontFamily: Appfonts.BOLD,
    color: Appcolors.DARK_GREY,
  },
  monthNameStyle: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Appfonts.MEDIUM,
    color: Appcolors.LIGHT_GREY,
  },
});

export default ListViewer;
