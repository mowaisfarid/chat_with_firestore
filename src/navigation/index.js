// react & react-native imports
import React from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens imports
import {Signup} from '@src/features/auth';
import {Dashobard} from '@src/features/dashboard';

const Stack = createNativeStackNavigator();

const RootContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Dashobard" component={Dashobard} />
    </Stack.Navigator>
  );
};

export default RootContainer;
