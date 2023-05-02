import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';
import DirectoryScreen from './DirectoryScreen';
import AboutScreen from './AboutScreen';
import ContactScreen from './ContactScreen';
import CampsiteInfoScreen from '../features/campsites/CampsiteInfoScreen';
import { Icon } from 'react-native-elements';


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
        options={({ navigation }) => ({
          title: 'Home',
          headerLeft: () => (
            <Icon
              name='home'
              type='font-awesome'
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            /> 
          ),
        })}
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
        options={({ navigation }) => ({
          title: 'Campsite Directory',
          headerLeft: () => (
            <Icon
              name='list'
              type='font-awesome'
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            /> 
          ),
        })}
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
        options={({ navigation }) => ({
          headerLeft: () => (
            <Icon
              name='info-circle'
              type='font-awesome'
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            /> 
          ),
        })}
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
        options={({ navigation }) => ({
          title: 'Contact Us',
          headerLeft: () => (
            <Icon
              name='address-card'
              type='font-awesome'
              iconStyle={styles.stackIcon}
              onPress={() => navigation.toggleDrawer()}
            /> 
          ),
        })}
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
          options={{
             title: 'Home',
             drawerIcon: ({ Color }) => (
                <Icon
                  name='home'
                  type='font-awesome'
                  size={24}
                  iconStyle={{width: 24}}
                  color={Color}
                />
              )
            }}
        />
        <Drawer.Screen
          name='Directory'
          component={DirectoryNavigator}
          options={{ 
            title: 'Directory',
             drawerIcon: ({ Color }) => (
                <Icon
                  name='list'
                  type='font-awesome'
                  size={24}
                  iconStyle={{width: 24}}
                  color={Color}
                /> 
            )
          }}
        />
        <Drawer.Screen
          name='About'
          component={AboutNavigator}
          options={{
              title: 'About Us',
              drawerIcon: ({ Color }) => (
                <Icon
                  name='info-circle'
                  type='font-awesome'
                  size={24}
                  iconStyle={{width: 24}}
                  color={Color}
                /> 
              )
            }}
        />
        <Drawer.Screen
          name='Contact'
          component={ContactNavigator}
          options={{ 
            title: 'Contact Us', 
            drawerIcon: ({ Color }) => (
              <Icon
                name='address-card'
                type='font-awesome'
                size={24}
                iconStyle={{width: 24}}
                color={Color}
              /> 
            )
          }}
        />
      </Drawer.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({ 
  stackIcon: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 24,
  }
});

export default Main;
