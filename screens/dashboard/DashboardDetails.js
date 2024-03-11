import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../myscreens/Header';
import CustomCard from '../../shared/components/cards/CustomCard';
import {useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import ScanCamera from '../document-scanner/Buttons/ScanCamera';
import {mockData} from './DashboardScreen';
import {certificateData} from './PdfViewer';
import {useEffect, useState} from 'react';
import database from './database.json';
const DashboardDetails = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {itemId, index} = route.params;
  console.log(itemId);
  const [data, setData] = useState([]);
  useEffect(() => {
    // Mock data for testing
    setData(database.dashboardData);
  }, []);
  // Fake data
  console.log('certificate Data');

  const handleCardPress = (item, num) => {
    // Navigate to DocumentDetails screen
    navigation.navigate('PdfPreview', {
      itemId: itemId,
      uri: item.uri,
      index: num,
    });
  };
  const filteredData = database.dashboardData.filter(
    item => item.id === itemId,
  );
  console.log(filteredData[0]);
  const filteredCertificates = filteredData[0].certs;

  return (
    <View style={styles.container1}>
      <Header />
      <ScrollView style={styles.container}>
        <View style={styles.cardsContainer}>
          {filteredCertificates.map((data, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleCardPress(data, index)}>
              <CustomCard
                certificateType={data.type}
                expiryDate={data.expiryDate}
              />
            </TouchableOpacity>
          ))}
          <ScanCamera />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  container1: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
    backgroundColor: '#F0F0F0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardsContainer: {
    marginTop: 170,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default DashboardDetails;
