import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {View, Text} from 'react-native';
import React from 'react';
import MainPage from './MainPage';

const Navigator = () => {
  const stack = createNativeStackNavigator();
  return (
    <stack.Navigator>
      <stack.Screen name="MainPage" component={MainPage} />
    </stack.Navigator>
  );
};

export default Navigator;
