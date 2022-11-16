import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import HomeScreen from './Screens/Home/HomeScreen';
import DetailsScreen from './Screens/Details/DetailsScreen';
import SettingsScreen from './Screens/Setting/SettingsScreen';
import NotificationScreen from './Screens/Notification/NotificationScreen';

//Screen names
const homeName = 'Home';
const detailsName = 'Details';
const settingsName = 'Settings';
const notificationName = 'Notifications';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home';
            } else if (rn === detailsName) {
              iconName = focused ? 'notifications' : 'home';
            } else if (rn === settingsName) {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (rn === notificationName) {
              iconName = focused ? 'notifications' : 'notifications-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#c1d891',
          inactiveTintColor: 'black',
          labelStyle: {paddingBottom: 10, fontSize: 10},
          style: {
            padding: 10,
            // height: 100,
          },
        }}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />
        <Tab.Screen name={notificationName} component={NotificationScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#c1d891',
  },
});
export default MainContainer;
