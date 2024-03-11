import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import PDFView from 'react-native-pdf-light';

const PdfPreview = () => {
  return (
    <View style={{flex: 1}}>
      <PDFView
        fadeInDuration={250.0}
        style={{flex: 1}}
        resource={{uri: 'http://www.pdf995.com/samples/pdf.pdf', cache: true}}
        resourceType="url"
        onLoad={() => console.log('PDF loaded')}
        onError={error => console.log(`Error: ${error}`)}
      />
    </View>
  );
};

export default PdfPreview;
