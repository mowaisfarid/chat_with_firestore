// react & react-native imports
import React from 'react';
import {View, Text} from 'react-native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens imports
// import Signup from '../features/auth/screens/signup';
import Signup from '@src/features/auth/screens/signup';

const Home = () => {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const RootContainer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default RootContainer;
