/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {StatusBar} from 'react-native';
import MainContainer from './src/Navigations/MainContainer';
import AddPlantScreen from './src/Navigations/Screens/AddPlant/AddPlantScreen';
import HomeScreen from './src/Navigations/Screens/Home/HomeScreen';
import TestScreen from './src/Navigations/Screens/TestScreen/Testscreen';
import LoginScreen from './src/Navigations/Screens/Login/LoginScreen';

function App() {
  return (
    <>
      {/* <StatusBar hidden /> */}
      <AddPlantScreen />
    </>
  );
}

export default App;
