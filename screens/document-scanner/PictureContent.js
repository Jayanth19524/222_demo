// PictureContent.js
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const PictureContent = ({route}) => {
  const {recognizedText} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{recognizedText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default PictureContent;
