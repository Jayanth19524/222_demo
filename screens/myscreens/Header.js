import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAuth } from '../../AuthContext';
import { useNavigation } from '@react-navigation/native';
Icon.loadFont();
const Header = () => {
  
  const { state, dispatch } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(state.isLoggedIn);
  const navigation = useNavigation();

  // Your authentication logic to set the login status goes here
  const handleSettingsPress = () => {
    // Navigate to the Settings page
    navigation.navigate('Settings');
  };

  return (
    <View style={isLoggedIn ? styles.container : styles.container2}>
      {isLoggedIn && (
        <TouchableOpacity style={styles.button} onPress={handleSettingsPress}>
          <Icon name="settings" size={24} color="black" />
        </TouchableOpacity>
      )}
      <Image
        source={require('./logo.png')} // Replace with the path to your logo image
        style={styles.logo}
      />
      {isLoggedIn && (
        <TouchableOpacity style={styles.button}>
          <Icon name="search" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 40,
    
    width: '100%',
    height: 170,
    backgroundColor: '#F0F0F0',
    flexDirection: 'row', // Align buttons in a row
    alignItems: 'center',
    justifyContent: 'space-between', // Add space between logo and buttons
  },
  container2: {
    position: 'absolute',
    top: 40,
    
    
    backgroundColor: '#F0F0F0',
    flexDirection: 'row', // Align buttons in a row
    alignItems: 'center',
    justifyContent: 'space-between', // Add space between logo and buttons
  },
  logo: {
    width: 80,
    height: 80.06,
    alignItems: 'center',
  },
  button: {
    padding: 10,
  },
});

export default Header;
