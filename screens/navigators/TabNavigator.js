// TabNavigator.js

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from '../dashboard/DashboardScreen'; // Import your DashboardScreen component
// Import your AddDocumentsScreen component
import DocumentNavigation from '../document-scanner/DocumentNavigation'; // Import your DocumentNavigation stack
import {NavigationContainer} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import DashboardNavigation from '../dashboard/DashboardNavigation';
import CameraScreen from '../document-scanner/CameraScreen';
import NotificationsPage from '../notifications/NotificationsPage';
Ionicons.loadFont();
AntDesign.loadFont();
Feather.loadFont();
const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Dashboard"
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="list" color={color} size={size} />
          ),
        }}
        component={DashboardNavigation}
      />
      <Tab.Screen
        name="Notifications"
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="notifications" color={color} size={size} />
          ),
        }}
        component={NotificationsPage}
      />
      
    </Tab.Navigator>
  );
};

export default TabNavigator;
