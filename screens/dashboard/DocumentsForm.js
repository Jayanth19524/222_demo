import React, {useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../myscreens/Header';
import Input from '../../shared/components/input/Input';
import DropDown from '../../shared/components/input/CustomDropdown';
import CustomButton from '../../shared/components/buttons/CustomButton';
import {useRoute} from '@react-navigation/native';
import database from './database.json';
import {mockData} from './AddDocumentForm';
import {certificateData} from './DashboardDetails';
import {loginData} from '../myscreens/MyScreen';
const DocumentsForm = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {itemId, index} = route.params;
  console.log("blessings");
  const filteredData = database.dashboardData.filter(
    item => item.id === itemId,
  );
  
  const filteredCertificates = filteredData[0].certs;
console.log(filteredCertificates[index]);
  const filteredMock = mockData.filter(data => data.id == itemId);
  console.log(loginData);
  const [formData, setFormData] = useState({
    firstName: loginData[0].firstName,
    lastName: loginData[0].lastName,
    email: loginData[0].email,
    phone: loginData[0].phone,
    postcode: '',
    address: filteredMock[0].details,
    city: filteredMock[0].city,
    serviceType: filteredCertificates[index].type,
    bestDayOfWeek: '',
    bestTimeSlot: '',
    priority: filteredCertificates[index].priority,
  });

  const handleMakeRequest = () => {
    // Validate the form data before proceeding

    // Navigate to the next screen and pass the form data as params
    navigation.navigate('RequestSummary', {formData});
  };
  const placeholderForService =
    filteredCertificates[index].type || 'service type';
  const placeholderForAddress = filteredMock[0].details || 'address';
  const placeholderForcity = filteredMock[0].city || 'city';
  const placeholderForPriority = filteredCertificates[index].priority;
  const placeholderforFirstName = loginData[0].firstName || 'firstName';
  const placeholderforLastName = loginData[0].lastName || 'lastName';
  const placeholderForEmail = loginData[0].email || 'email';
  const placeholderforPhone = loginData[0].phone || 'phone';

  return (
    <ScrollView style={styles.container}>
      <Header style={{top: 40, left: 20, marginBottom: 20}} />
      <Text style={styles.heading}>Book a service provider</Text>
      <View style={styles.body}>
        <Input
          defaultValues={placeholderforFirstName}
          onChangeText={text => setFormData({...formData, firstName: text})}
        />
        <Input
          defaultValues={placeholderforLastName}
          onChangeText={text => setFormData({...formData, lastName: text})}
        />
        <Input
          defaultValues={placeholderForEmail}
          onChangeText={text => setFormData({...formData, email: text})}
        />
        <Input
          defaultValues={placeholderforPhone}
          onChangeText={text => setFormData({...formData, phone: text})}
        />
        <Input
          defaultValues="PostCode"
          onChangeText={text => setFormData({...formData, postcode: text})}
        />
        <Input
          defaultValues={placeholderForAddress}
          onChangeText={text => setFormData({...formData, address: text})}
        />
        <Input
          defaultValues={placeholderForcity}
          onChangeText={text => setFormData({...formData, city: text})}
        />
      </View>
      <Text style={styles.heading2}>Book a service provider</Text>
      <View style={styles.body2}>
        <DropDown
          options={[
            {label: 'Gas', value: 'Gas'},
            {label: 'Electrician', value: 'Electrician'},
            {label: 'EPC', value: 'EPC'},
          ]}
          onSelect={selectedOption =>
            setFormData({...formData, serviceType: selectedOption})
          }
          placeholder={placeholderForService}
        />
        <DropDown
          options={[
            {label: 'Monday', value: 'Monday'},
            {label: 'Tuesday', value: 'Tuesday'},
            {label: 'Wednesday', value: 'Wednesday'},
            {label: 'Thursday', value: 'Thursday'},
            {label: 'Friday', value: 'Friday'},
            {label: 'Saturday', value: 'Saturday'},
            {label: 'Sunday', value: 'Sunday'},
          ]}
          onSelect={selectedOption =>
            setFormData({...formData, bestDayOfWeek: selectedOption})
          }
          placeholder="Best Day of Week"
        />

        <DropDown
          options={[
            {label: 'Afternoon', value: 'Afternoon'},
            {label: 'Evening', value: 'Evening'},
          ]}
          onSelect={selectedOption =>
            setFormData({...formData, bestTimeSlot: selectedOption})
          }
          placeholder="Best Time Slot"
        />

        <DropDown
          options={[
            {label: 'High', value: 'High'},
            {label: 'Low', value: 'Low'},
          ]}
          onSelect={selectedOption =>
            setFormData({...formData, priority: selectedOption})
          }
          placeholder={placeholderForPriority}
        />
      </View>

      <CustomButton
        title="Make Request"
        style={{marginTop: 100}}
        onPress={handleMakeRequest}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#F0F0F0',
  },
  body: {
    paddingTop: 10,
  },
  body2: {
    paddingTop: 10,
    paddingBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 180,
    paddingBottom: 20,
    textAlign: 'center', // Center the text horizontally
  },
  heading2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    textAlign: 'center', // Center the text horizontally
  },
});

export default DocumentsForm;
