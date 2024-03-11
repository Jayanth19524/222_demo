// DocumentNavigation.js

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AddDocumentsScreen from './AddDocumentsScreen';
import DocumentsForm from '../dashboard/DocumentsForm';
import CameraScreen from './CameraScreen';
import Settings from '../navigators/Settings';
const Stack = createStackNavigator();

const DocumentNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="AddDocuments"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AddDocuments" component={AddDocumentsScreen} />
      <Stack.Screen name="form" component={DocumentsForm} />
      
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
};

export default DocumentNavigation;
