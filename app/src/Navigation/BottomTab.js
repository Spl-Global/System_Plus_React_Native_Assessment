import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListingScreen from '../data/screen/Listing/ListingScreen';
import CalenderScreen from '../design/screens/Calender/CalenderScreen';
import CustomIcon from '../design/components/Icon/CustomIcon';
import styles from './BottomTabStyles';
import {Appcolors, Appfonts, icons} from '../design/constants';
import {View, Text} from 'react-native';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Appcolors.PRIMARY,
        tabBarInactiveTintColor: Appcolors.LIGHT_GREY,
        tabBarStyle: {height: 60},
        tabBarIcon: ({focused, color, size}) => {
          let icon, title;
          if (route.name === 'Calendar') {
            icon = icons.CALENDAR;
            title = 'Calendar';
          } else if (route.name === 'Listing') {
            icon = icons.BUILDINGS;
            title = 'Listing';
          }
          return (
            <View
              style={{
                paddingVertical: 18,
                backgroundColor: Appcolors.WHITE,
                justifyContent: 'center',
                alignItems: 'center',
                borderTopWidth: 2,
                borderTopColor:
                  color === Appcolors.PRIMARY
                    ? Appcolors.DANGER
                    : Appcolors.WHITE,
                width: '100%',
              }}>
              <CustomIcon
                style={{...styles.iconContainer, ...{color: color}}}
                source={icon}
                imgStyle={{
                  ...styles.imgStyle,
                  ...{tintColor: color},
                }}></CustomIcon>
              <Text style={{...styles.titleStyle, ...{color: color}}}>
                {title}
              </Text>
            </View>
          );
        },
      })}
      initialRouteName="Listing">
      <Tab.Screen
        name="Listing"
        component={ListingScreen}
        // options={{headerShown: false}}
      />
      <Tab.Screen
        name="Calendar"
        component={CalenderScreen}
        // options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};
export default BottomTab;
