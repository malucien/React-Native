import React from 'react';
import { View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import DirectoryScreen from './DirectoryScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import CampsiteInfoScreen from '../features/campsites/CampsiteInfoScreen'


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const screenOptions = {
  headerTintColor: '#fff',
  headerStyle: { backgroundColor: '#5637DD' },
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: 'Home' }}
      />
    </Stack.Navigator>
  );
};

const DirectoryNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Directory'
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name='Directory'
        component={DirectoryScreen}
        options={{ title: 'Campsite Directory' }}
      />
      <Stack.Screen
        name='CampsiteInfo'
        component={CampsiteInfoScreen}
        options={{ title: 'Campsite Information' }}
      />
    </Stack.Navigator>
  );
};

const AboutNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='About'
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name='About'
        component={AboutScreen}
        options={{ title: 'About Us' }}
      />
    </Stack.Navigator>
  );
};

const ContactNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Contact'
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name='Contact'
        component={ContactScreen}
        options={{ title: 'Contact Us' }}
      />
    </Stack.Navigator>
  );
};

const Main = () => {
  return (
    <View
      style={{
        flex: 1,
        paddingTop:
          Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
      }}
    >
      <Drawer.Navigator
        initialRouteName='Home'
        drawerStyle={{ backgroundColor: '#CEC8FF' }}
      >
        <Drawer.Screen
          name='Home'
          component={HomeNavigator}
          options={{ title: 'Home' }}
        />
        <Drawer.Screen
          name='Directory'
          component={DirectoryNavigator}
          options={{ title: 'Directory' }}
        />
        <Drawer.Screen
          name='About'
          component={AboutNavigator}
        />
        <Drawer.Screen
          name='Contact'
          component={ContactNavigator}
          options={{ title: 'Contact Us' }}
        />
      </Drawer.Navigator>
    </View>
  );
};

export default Main;
