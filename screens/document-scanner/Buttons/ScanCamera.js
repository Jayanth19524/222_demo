import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Button,
  Alert,
  Dimensions,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import {launchImageLibrary} from 'react-native-image-picker';
import RNImageToPdf from 'react-native-image-to-pdf';
FontAwesome.loadFont();
import DocumentPicker from 'react-native-document-picker';
import Imagepicker from 'react-native-image-picker';
import {useRoute} from '@react-navigation/native';
const ScanCamera = () => {
  const route = useRoute();
  const {itemId} = route.params;
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [imageData, setImageData] = useState('');
  const [cameraPage, setCameraPage] = useState(true);
  const handleScanButtonPress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleUploadPress = async () => {
    const options = {
      mediaType: 'photo',
    };

    // Open the image picker
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // You can handle the selected image here
        const selectedImage = response;
        console.log(response);
        Alert.alert('Image Selected' + selectedImage);
        navigation.navigate('PdfPreview', {
          itemId: itemId,
          uri: response.assets[0].uri,
        });
        setModalVisible(false);
      }
    });
  };
  const convertImageToPdf = async () => {
    try {
      const options = {
        imagePaths: [imageData.assets[0].uri],
        name: 'PDF1',
        maxSize: {
          // optional maximum image dimension - larger images will be resized
          width: 900,
          height: Math.round(
            (Dimensions.get('window').height / Dimensions.get('window').width) *
              900,
          ),
        },
        quality: 0.7, // optional compression paramter
      };
      const pdf = await RNImageToPdf.createPDFbyImages(options);

      Alert.alert(pdf.filePath);
    } catch (e) {
      console.log('awesome');
      console.log(e);
    }
  };

  const handleCameraPress = () => {
    // Handle the logic for opening the camera
    // You can navigate to the camera screen or perform any other action

    setModalVisible(true);
  };
  const handleCameraOpt = () => {
    navigation.navigate('camera', {
      itemId: itemId,
    });
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity onPress={handleCameraPress}>
        <View style={styles.card}>
          <FontAwesome
            name="camera"
            size={40}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.cardText}>Add Documents</Text>
        </View>
      </TouchableOpacity>

      {/* Modal for choosing upload or camera */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Choose an option:</Text>
            {/* Custom Upload Button */}
            <TouchableOpacity
              style={styles.customButton}
              onPress={handleUploadPress}>
              <Text style={styles.buttonText}>Upload</Text>
            </TouchableOpacity>

            {/* Custom Open Camera Button */}
            <TouchableOpacity
              style={styles.customButton}
              onPress={handleCameraOpt}>
              <Text style={styles.buttonText}>Open Camera</Text>
            </TouchableOpacity>

            {/* Custom Cancel Button */}
            <TouchableOpacity
              style={styles.customButton}
              onPress={handleCloseModal}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: 25,
    marginBottom: 10, // Add margin to separate the icon and text
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 150,
    height: 150,
    borderRadius: 20,
    borderWidth: 2,
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

  cardText: {
    marginTop: 10,
    fontSize: 12,
    fontWeight: 'light',
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },

  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },

  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },
  customButton: {
    backgroundColor: '#f0f0f0', // Change the background color as desired
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 2,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ScanCamera;
