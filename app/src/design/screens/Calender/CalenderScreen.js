import React from 'react';
import {View, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import StripeCalender from '../../components/Calendar/StripeCalender';
import AppHeader from '../../components/Header/AppHeader';
import {RawData, RawData2} from '../../Utilities/RawData';
import ListViewer from './ListViewer';
import styles from './styles';
const CalenderScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#FFFFFF'}></StatusBar>
      <AppHeader title="Calender"></AppHeader>
      <ScrollView
        style={styles.subcontainer}
        contentContainerStyle={{justifyContent: 'center'}}>
        <View>
          <View style={styles.calenderContainer}>
            <StripeCalender></StripeCalender>
          </View>
        </View>
        <View style={{width: '93%', alignSelf: 'center'}}>
          <ListViewer
            RawData={RawData}
            day="Wednesday"
            date="07 August 2021"></ListViewer>
          <ListViewer
            RawData={RawData2}
            day="Thursday"
            date="08 August 2021"></ListViewer>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default CalenderScreen;
