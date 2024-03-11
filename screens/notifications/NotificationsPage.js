import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import Header from '../myscreens/Header';

const NotificationsPage = () => {
  // Fake data array for notifications
  const fakeData = [
    {id: '1', message: 'New message received'},
    {id: '2', message: 'You have a new friend request'},
    {id: '3', message: 'Reminder: Meeting at 2 PM'},
    // Add more fake data as needed
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={fakeData}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.notificationItem}>
            <Text style={styles.notificationText}>{item.message}</Text>
          </View>
        )}
      />
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
  header: {
    paddingTop:200,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  notificationItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 12,
  },
  notificationText: {
    fontSize: 16,
  },
});

export default NotificationsPage;
