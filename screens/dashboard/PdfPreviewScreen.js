import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  Dimensions,
  Alert,
  Image,
} from 'react-native';
import PDFView from 'react-native-pdf';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {mockData} from './AddDocumentForm';
import database from './database.json';
export const certificateData = [
  {
    id: 1,
    type: 'Energy Certificate',
    expiryDate: '15/11/2023',
    priority: 'high',
    uri: './Gas.pdf',
  },
  {
    id: 1,
    type: 'Gas Certificate',
    expiryDate: '20/12/2023',
    priority: 'high',
    uri: './Gas.pdf',
  },
  {
    id: 1,
    type: 'EPC Certificate',
    expiryDate: '25/01/2024',
    priority: 'mid',
    uri: './Gas.pdf',
  },
  {
    id: 2,
    type: 'Energy Certificate',
    expiryDate: '10/10/2023',
    priority: 'high',
    uri: './Gas.pdf',
  },
  {
    id: 2,
    type: 'Gas Certificate',
    expiryDate: '18/12/2023',
    priority: 'high',
    uri: './Gas.pdf',
  },
  {
    id: 2,
    type: 'EPC Certificate',
    expiryDate: '22/02/2024',
    priority: 'low',
    uri: './Gas.pdf',
  },
  {
    id: 3,
    type: 'Energy Certificate',
    expiryDate: '05/09/2023',
    priority: 'high',
    uri: './Gas.pdf',
  },
  {
    id: 3,
    type: 'Gas Certificate',
    expiryDate: '15/11/2023',
    priority: 'high',
    uri: './Gas.pdf',
  },
  {
    id: 3,
    type: 'EPC Certificate',
    expiryDate: '20/01/2024',
    priority: 'mid',
    uri: './Gas.pdf',
  },
];
import {loginData} from '../myscreens/MyScreen';
import DocumentPicker from 'react-native-document-picker';
import RNImageToPdf from 'react-native-image-to-pdf';
import {useEffect} from 'react';
import CustomDropdown from '../../shared/components/input/CustomDropdown';

// Add a button or component to trigger the document picker

const PdfPreviewScreen = () => {
  const route = useRoute();
  const {itemId, uri, index} = route.params;

  console.log('pasha');
  console.log(uri);
  console.log(index);

  const [imagePreview, setImagePreview] = useState(null);
  const [selectedType, setSelectedType] = useState('Gas');

  const navigation = useNavigation();
  const filteredData = database.dashboardData.filter(
    item => item.id === itemId,
  );
  console.log(filteredData[0]);
  const filteredCertificates = filteredData[0].certs;
  const generateRandomDate = () => {
    const year = Math.floor(Math.random() * 3) + 2022; // Random year between 2022 and 2024
    const month = Math.floor(Math.random() * 12) + 1; // Random month between 1 and 12
    const day = Math.floor(Math.random() * 28) + 1; // Random day between 1 and 28 (assuming all months have 28 days)
    return `${day}/${month}/2024`;
  };
  const handleAddDocument = () => {
    // Create a new certificate object with selected type and random expiry date
    console.log('add document');
    console.log(uri);
    console.log(imagePreview);
    const newCertificate = {
      type: selectedType,
      expiryDate: generateRandomDate(), // Generate a random expiry date
      priority: 'Custom Priority',
      uri: imagePreview, // Use pdfPath1.url as the URI
    };

    // Add the new certificate to certificateData
    filteredCertificates.push(newCertificate);
    console.log(certificateData);
    // Navigate or perform any other action after adding the document
    // For example, you can navigate back to the previous screen
    navigation.navigate('DashboardDetails', {itemId: itemId});
  };
  // Function to generate a random expiry date (for demonstration)

  useEffect(() => {
    // This code will be executed when the component is mounted

    setImagePreview(uri);
  }, []);
  console.log(uri);

  return (
    <View style={styles.container}>
      {imagePreview ? (
        // Check if the URI starts with 'file:///'
        uri.startsWith('file:///') ? (
          // If it's a local file URI, use require
          <Image source={{uri: uri}} style={styles.imagePreview} />
        ) : (
          // If it's a remote URI, use uri directly
          <Image source={require('./plus.png')} style={styles.imagePreview} />
        )
      ) : (
        // Render a placeholder if imagePreview is false
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>PDF Preview</Text>
        </View>
      )}
      <View style={styles.navigationContainer}>
        {index !== undefined ? (
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
        ) : (
          <>
            <TouchableOpacity
              style={styles.navigationButton}
              onPress={handleAddDocument}>
              <Text>Add Document</Text>
            </TouchableOpacity>
            <CustomDropdown
              options={[
                {label: 'Gas', value: 'Gas'},
                {label: 'Electrician', value: 'Electrician'},
                {label: 'EPC', value: 'EPC'},
              ]}
              onSelect={selectedOption => setSelectedType(selectedOption.value)}
              placeholder="gas"
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },
  imagePreview: {
    width: '90%',
    height: '80%',
    resizeMode: 'contain',
    borderWidth: 1, // Add border
    borderColor: 'black', // Border color
  },
  placeholder: {
    width: '80%',
    height: '80%',
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
  navigationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%', // Limit the width to prevent overflow
    marginTop: 20,
  },
  navigationButton: {
    backgroundColor: 'lightgray',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 1, // Add border
    borderColor: 'black', // Border color
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default PdfPreviewScreen;
