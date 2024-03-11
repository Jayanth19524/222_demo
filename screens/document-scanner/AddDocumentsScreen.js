import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker'; // Import the image picker library
import Header from '../myscreens/Header';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import ScanCamera from './Buttons/ScanCamera';
import { useNavigation } from '@react-navigation/native';
FontAwesome.loadFont();

const AddDocumentsScreen = () => {
  const navigation = useNavigation();

  const handleUploadLinkPress = () => {
    // Configure the options for the image picker
    const options = {
      mediaType: 'photo',
    };

    // Open the image picker
    launchImageLibrary(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // You can handle the selected image here
        const selectedImage = response.uri;
        Alert.alert('Image Selected', selectedImage);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Header style={{ marginLeft: 100 }} />
      <Text style={styles.heading}>Add Documents</Text>
      <ScanCamera />
      <View style={styles.orTextContainer}>
        <Text>or</Text>
      </View>
      <TouchableOpacity
        style={styles.uploadLinkContainer}
        onPress={handleUploadLinkPress}>
        <Text style={styles.uploadLinkText}>Upload</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    marginTop: 40,
    marginBottom: 10, // Add margin to separate the icon and text
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 250,
    height: 250,

    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black', // Add a border color
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
    elevation: 5, // Add elevation for shadow (Android)
    shadowColor: '#000', // Add shadow color (iOS)
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 0,
    paddingBottom: 20,
    textAlign: 'center', // Center the text horizontally
  },
  iconContainer: {
    position: 'absolute',
    // Adjust the left position to center the icon horizontally
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardText: {
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'light',
    color: '#333',
  },
  orTextContainer: {
    marginVertical: 20,
  },
  uploadLinkContainer: {},
  uploadLinkText: {
    fontSize: 17,
    fontWeight: '',
    color: '#BE2448', // White text on pink background
  },
});

export default AddDocumentsScreen;
