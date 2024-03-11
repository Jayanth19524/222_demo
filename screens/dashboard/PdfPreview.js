import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Button} from 'react-native';
import PDFView from 'react-native-pdf';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {mockData} from './AddDocumentForm';
import {certificateData} from './DashboardDetails';
import {loginData} from '../myscreens/MyScreen';
import DocumentPicker from 'react-native-document-picker';

// Add a button or component to trigger the document picker

const PdfPreview = () => {
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.pdf],
      });
      console.log(result);
      // Handle the selected document here
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        // Handle document picker cancellation
      } else {
        // Handle other errors
      }
    }
  };
  const navigation = useNavigation();
  const route = useRoute();
  const {itemId, index} = route.params;
  console.log(certificateData);
  const filteredCertificates = certificateData.filter(
    data => data.id === itemId,
  );
 
  
  const filesr = require('./Gas.pdf');

  return (
    <View style={{flex: 1}}>
      <PDFView
        source={filesr}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        onPressLink={uri => {
          console.log(`Link pressed: ${uri}`);
        }}
        style={{flex: 1}}
      />
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationButton}
          onPress={() =>
            navigation.navigate('DocumentDetails', {
              itemId: itemId,
              index: index,
            })
          }>
          <Text>Book Service Provider</Text>
        </TouchableOpacity>
        <Button title="Pick PDF" onPress={pickDocument} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  navigationButton: {
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 5,
  },
});

export default PdfPreview;
