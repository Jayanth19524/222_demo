import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import TabNavigator from './TabNavigator'; // Import your TabNavigator component
import MyScreen from '../myscreens/MyScreen'; // Import your MyScreen component
import Settings from './Settings';
import CameraScreen from '../document-scanner/CameraScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MyScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="MyScreen"
          component={MyScreen}
          options={{
            headerShown: false, // Hide the header for the "Create Your Account" screen
          }}
        />
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="camera" component={CameraScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
