import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
  Dimensions,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import {RNCamera} from 'react-native-camera';
import {useNavigation} from '@react-navigation/native';
import CustomDropdown from '../../shared/components/input/CustomDropdown';
import {createPdf} from 'react-native-images-pdf';
import RNFS from 'react-native-fs';
import RNBlobUtil from 'react-native-blob-util';
import RnDocumentScanner from 'react-native-document-scanner';
import RNImageToPdf from 'react-native-image-to-pdf';
import {useRoute} from '@react-navigation/native';
const CameraScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [pdfPath, setPdfPath] = useState('');
  const {itemId} = route.params;
  const handleTakePicture = async () => {
    try {
      if (this.camera) {
        //const options = {quality: 0.5, base64: true};
        const data = await this.camera.takePictureAsync(options);
        console.log(data.uri);

        // Save the captured image to the camera roll
        await CameraRoll.save(data.uri, 'photo');
        console.log(data.url);
        // Create PDF from the captured image

        const options = {
          imagePaths: data.url,
          name: 'PDFName',
          maxSize: {
            // optional maximum image dimension - larger images will be resized
            width: 900,
            height: Math.round(
              (Dimensions.get('window').height /
                Dimensions.get('window').width) *
                900,
            ),
          },
          quality: 0.7, // optional compression paramter
        };
        const pdf = await RNImageToPdf.createPDFbyImages(options);

        console.log(pdf.filePath);
        setPdfPath(data.url);
        console.log('close ' + pdfPath);
        navigation.navigate('PdfViewer', {itemId: itemId, pdfPath1: data});

        // Alert.alert('Success', `PDF created successfully: ${pdfPath}`);
        // You can navigate to a different screen or perform any other action
        // navigation.navigate('form');
      }
    } catch (error) {
      console.error(error);
      Alert.alert(
        'Error',
        'Picture not saved to camera roll or failed to create PDF!',
      );
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera
        ref={ref => {
          this.camera = ref;
        }}
        style={styles.preview}
        type={RNCamera.Constants.Type.back} // Set camera type to front
        flashMode={RNCamera.Constants.FlashMode.off}
      />
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity onPress={handleTakePicture} style={styles.capture}>
          <Text style={{fontSize: 14}}> SNAP </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginLeft: 40,
          marginBottom: 40,
          width: '80%',
          alignContent: 'center',
        }}>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});

export default CameraScreen;
