import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Header from '../myscreens/Header';
import database from './database.json'; // Importing the JSON data

const DashboardScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  useEffect(() => {
    // Load data from the JSON file
    setData(database.dashboardData);
  }, []);

  const handleAddProperty = () => {
    navigation.navigate('AddDocument');
  };

  const renderItem = ({item}) => (
    <TouchableOpacity onPress={() => navigateToDocumentDetails(item.id)}>
      <View style={styles.card}>
        <View style={styles.innerContainer}>
          <View style={styles.leftPart}>
            <Text style={styles.propertyText}>Property</Text>
            <Text style={styles.idText}>{item.id}</Text>
            <Text style={styles.propertyText2}>{item.type}</Text>
          </View>
          <View style={styles.rightPart}>
            <Text style={styles.detailsText}>{item.details}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const navigateToDocumentDetails = id => {
    // Navigate to the DocumentDetails screen with the selected item
    console.log(id);
    navigation.navigate('DashboardDetails', {itemId: id});
  };

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.heading}>Dashboard</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      <TouchableOpacity onPress={handleAddProperty}>
        <View style={styles.card2}>
          <Text style={styles.centerText}>Add Property</Text>
        </View>
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
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 200,
    paddingBottom: 30,
    textAlign: 'center', // Center the text horizontally
  },
  listContainer: {
    paddingBottom: 20,
  },
  card: {
    width: 350,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    borderRadius: 10,
    padding: 0, // Remove padding from the card
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderColor: 'black', // Add border color to the card
    borderWidth: 2, // Add border width to the card
  },
  card2: {
    width: 350,
    height: 70,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    borderRadius: 10,
    padding: 0, // Remove padding from the card
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderColor: 'green', // Add border color to the card
    borderWidth: 2, // Add border width to the card
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    // Styles for the text to be centered
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
  },
  innerContainer: {
    flexDirection: 'row',
    width: 350,
    height: 70,
  },
  leftPart: {
    width: 60,
    height: 70,
    backgroundColor: '#FFFFFF',
    borderRightWidth: 2,
    borderColor: 'black',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightPart: {
    width: 250,
    height: 70,
    backgroundColor: '#FFFFFF',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
  },
  idText: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  detailsText: {
    fontSize: 17,
    fontWeight: '700',
  },
  propertyText: {
    fontSize: 12,
    fontWeight: 'light',
    marginBottom: 5,
  },
  propertyText2: {
    fontSize: 9,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default DashboardScreen;
