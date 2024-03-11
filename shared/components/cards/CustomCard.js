import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CustomCard = ({certificateType, expiryDate}) => {
  // Extract day, month, and year from the expiry date
  const [day, month, year] = expiryDate.split('/');

  // Convert month number to month name
  const monthName = new Date(`${year}-${month}-01`).toLocaleString('default', {
    month: 'long',
  });

  // Calculate the difference between the expiry date and the current date
  const currentDate = new Date();
  const expiryDateObject = new Date(`${year}-${month}-${day}`);
  const timeDifference = expiryDateObject - currentDate;
  const daysDifference = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

  // Define styles based on the time difference
  const getDateColor = () => {
    if (daysDifference <= 7) {
      return {color: 'red'};
    } else if (daysDifference <= 21) {
      return {color: 'yellow'};
    } else {
      return {color: 'green'};
    }
  };

  const dateStyle = getDateColor();
  const monthYearStyle = getDateColor(); // Use the same logic for month and year

  return (
    <View style={styles.card}>
      <Text style={styles.heading}>{certificateType}</Text>
      <Text style={[styles.date, dateStyle]}>{`${day}`}</Text>
      <View style={styles.dateContainer}>
        <Text
          style={[
            styles.monthYear,
            monthYearStyle,
          ]}>{`${monthName} ${year}`}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 150,
    width: 150,
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
  },
  heading: {
    fontSize: 13,
    marginBottom: 8,
  },
  dateContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  date: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  monthYear: {
    fontSize: 14,
    color: '#888',
  },
});

export default CustomCard;
