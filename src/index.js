import React from 'react';
import RootContainer from './navigation';
import {NavigationContainer} from '@react-navigation/native';
// import RootContainer from './navigation';
// add commit message

const App = () => {
  return (
    <NavigationContainer>
      <RootContainer />
    </NavigationContainer>
  );
};

export default App;
