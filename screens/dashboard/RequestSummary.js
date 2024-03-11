import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const RequestSummary = ({route}) => {
  const {formData} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Request Summary</Text>
      <View style={styles.card}>
        <Text
          style={
            styles.cardText
          }>{`Name: ${formData.firstName} ${formData.lastName}`}</Text>
        <Text style={styles.cardText}>{`Email: ${formData.email}`}</Text>
        <Text style={styles.cardText}>{`Phone: ${formData.phone}`}</Text>
        <Text style={styles.cardText}>{`Postcode: ${formData.postcode}`}</Text>
        <Text style={styles.cardText}>{`Address: ${formData.address}`}</Text>
        <Text style={styles.cardText}>{`City: ${formData.city}`}</Text>
        <Text
          style={
            styles.cardText
          }>{`Service Type: ${formData.serviceType}`}</Text>
        <Text
          style={
            styles.cardText
          }>{`Best Day of Week: ${formData.bestDayOfWeek}`}</Text>
        <Text
          style={
            styles.cardText
          }>{`Best Time Slot: ${formData.bestTimeSlot}`}</Text>
        <Text style={styles.cardText}>{`Priority: ${formData.priority}`}</Text>
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
    paddingTop:50,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center', // Center the text horizontally
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 8,
  },
});

export default RequestSummary;
