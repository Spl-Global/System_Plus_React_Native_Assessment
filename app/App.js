import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import BottomTab from './src/Navigation/BottomTab';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTab></BottomTab>
    </NavigationContainer>
  );
}
