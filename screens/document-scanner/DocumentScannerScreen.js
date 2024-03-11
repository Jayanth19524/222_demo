import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import Camera from 'react-native-camera';
import ImagePicker from 'react-native-image-picker'; // Import ImagePicker from react-native-image-picker
import RNFS from 'react-native-fs'; // Import the file system module

const DocumentScannerScreen = ({navigation}) => {
  const cameraRef = useRef(null);
  const [isScanning, setIsScanning] = useState(false);
  const [capturedImage, setCapturedImage] = useState(null);

  useEffect(() => {
    // Request camera permissions here, based on your project's setup
  }, []);

  const startScan = () => {
    setIsScanning(true);
  };

  const stopScan = () => {
    setIsScanning(false);
  };

  const handleDocumentCapture = async () => {
    if (cameraRef.current) {
      cameraRef.current.capture({}, (captureError, captureData) => {
        if (captureError) {
          console.error(captureError);
        } else {
          const base64Image = RNFS.readFile(captureData.path, 'base64');
          // Perform OCR on the captured image
          // You need to implement your OCR logic here
          const recognizedText = ''; // Implement OCR logic here

          if (recognizedText) {
            // Navigate to the PictureContent screen and pass the recognized text as a parameter
            navigation.navigate('PictureContent', {text: recognizedText});
          } else {
            // Handle OCR failure
            console.error('OCR failed.');
          }
        }
      });
    }
  };

  const handleImagePick = async () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('Image picker cancelled');
      } else if (response.error) {
        console.error('Image picker error:', response.error);
      } else {
        // Perform OCR on the selected image
        // You need to implement your OCR logic here
        const recognizedText = ''; // Implement OCR logic here

        if (recognizedText) {
          // Navigate to the PictureContent screen and pass the recognized text as a parameter
          navigation.navigate('PictureContent', {text: recognizedText});
        } else {
          // Handle OCR failure
          console.error('OCR failed.');
        }
      }
    });
  };

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={Camera.constants.Type.back}
        captureMode={Camera.constants.CaptureMode.still}>
        <TouchableOpacity
          style={styles.captureButton}
          onPress={isScanning ? handleDocumentCapture : startScan}
          disabled={!isScanning}>
          <Text style={styles.captureButtonText}>
            {isScanning ? 'Capture Document' : 'Start Scanning'}
          </Text>
        </TouchableOpacity>
        {isScanning && (
          <TouchableOpacity style={styles.stopButton} onPress={stopScan}>
            <Text style={styles.stopButtonText}>Stop Scanning</Text>
          </TouchableOpacity>
        )}
      </Camera>
      <TouchableOpacity style={styles.galleryButton} onPress={handleImagePick}>
        <Text style={styles.galleryButtonText}>Select from Gallery</Text>
      </TouchableOpacity>
      {capturedImage && (
        <Image source={{uri: capturedImage}} style={styles.capturedImage} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  captureButton: {
    alignSelf: 'center',
    margin: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 15,
  },
  captureButtonText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  stopButton: {
    alignSelf: 'center',
    marginTop: 10,
    backgroundColor: '#ff0000',
    borderRadius: 50,
    padding: 15,
  },
  stopButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  galleryButton: {
    alignSelf: 'center',
    margin: 20,
    backgroundColor: '#007AFF',
    borderRadius: 50,
    padding: 15,
  },
  galleryButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  capturedImage: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    margin: 20,
  },
});

export default DocumentScannerScreen;
