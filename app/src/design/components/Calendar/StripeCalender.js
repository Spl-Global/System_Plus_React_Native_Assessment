import React from 'react';
import {View, StyleSheet} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import {Appcolors, Appfonts} from '../../constants';
const StripeCalender = () => (
  <View style={styles.container}>
    <CalendarStrip
      scrollable
      style={{flex: 1}}
      selectedDate={new Date()}
      dayContainerStyle={{marginStart: 10, alignSelf: 'flex-end'}}
      calendarHeaderFormat="MMMM"
      highlightDateContainerStyle={styles.highlightDateContainer}
      highlightDateNumberStyle={styles.highlightDateNumber}
      highlightDateNameStyle={styles.highlightDateName}
      calendarColor={'transparent'}
      scrollToOnSetSelectedDate
      iconLeft={null}
      iconRight={null}
      calendarHeaderStyle={styles.calendarHeaderStyle}
      dateNumberStyle={styles.dateNumberStyle}
      dateNameStyle={styles.dateNameStyle}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  highlightDateName: {
    color: Appcolors.WHITE,
    fontSize: 14,
    lineHeight: 17,
    fontFamily: Appfonts.MEDIUM,
  },
  highlightDateNumber: {
    color: Appcolors.WHITE,
    fontSize: 14,
    lineHeight: 17,
    fontFamily: Appfonts.MEDIUM,
  },
  highlightDateContainer: {
    borderRadius: 5,
    height: '100%',
    backgroundColor: Appcolors.PRIMARY,
  },
  calendarHeaderStyle: {
    color: Appcolors.PRIMARY,
    fontSize: 16,
    lineHeight: 24,
    fontFamily: Appfonts.MEDIUM,
  },
  dateNumberStyle: {
    color: Appcolors.LIGHT_GREY,
    fontSize: 14,
    lineHeight: 21,
    fontFamily: Appfonts.BOOK,
  },
  dateNameStyle: {
    color: Appcolors.LIGHT_GREY,
    fontSize: 14,
    lineHeight: 21,
    fontFamily: Appfonts.BOOK,
  },
});

export default StripeCalender;
