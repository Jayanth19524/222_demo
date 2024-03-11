import React, {useState} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import Header from '../myscreens/Header';
import {useNavigation} from '@react-navigation/native';
import Input from '../../shared/components/input/Input';
import CustomButton from '../../shared/components/buttons/CustomButton';
export const mockData = [
  {
    id: '1',
    details: '123 Main Street, E1 6QR',
    city: 'London',
    type: 'residential',
  },
  {
    id: '2',
    details: '456 Elm Avenue, M4 5JK',
    city: 'Manchester',
    type: 'commercial',
  },
  {
    id: '3',
    details: '789 Oak Road, B2 3LM',
    city: 'Birmingham',
    type: 'residential',
  },
  // Add more mock data as needed
];
const AddDocumentForm = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    details: '',
    city: '',
    type: '',
  });

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleFormSubmit = () => {
    // Validate the form data if needed

    // Add the entered data to the mockData array
    mockData.push({
      id: (mockData.length + 1).toString(),
      details: formData.details,
      city: formData.city,
      type: formData.type,
    });

    // Clear the form after submission
    setFormData({
      details: '',
      city: '',
      type: '',
    });
    console.log(mockData);
    navigation.navigate('Dashboard');
    // You can add additional logic or navigation here if needed
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.heading}>Add Document Form</Text>
      <View style={styles.container1}>
        <Input
          placeholder="Details"
          value={formData.details}
          onChangeText={text => handleInputChange('details', text)}
        />
        <Input
          placeholder="City"
          value={formData.city}
          onChangeText={text => handleInputChange('city', text)}
        />
        <Input
          placeholder="Type"
          value={formData.type}
          onChangeText={text => handleInputChange('type', text)}
        />
        <CustomButton title="Submit" onPress={handleFormSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    
  },
  container1: {
    flex: 1,
    
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 180,
    paddingBottom: 20,
    textAlign: 'center', // Center the text horizontally
  },
  body: {
    paddingTop: 10,
  },
});

export default AddDocumentForm;
