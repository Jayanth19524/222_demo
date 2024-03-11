import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardScreen from './DashboardScreen';
import DashboardDetails from './DashboardDetails';
import DocumentsForm from './DocumentsForm';
import RequestSummary from './RequestSummary';
import Settings from '../navigators/Settings';
import PdfPreview from './PdfPreview';
import AddDocumentForm from './AddDocumentForm';
import PdfViewer from './PdfViewer';
import PdfPreviewScreen from './PdfPreviewScreen';
const Stack = createStackNavigator();

const DashboardNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Dashboard"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="DashboardDetails" component={DashboardDetails} />
      <Stack.Screen name="DocumentDetails" component={DocumentsForm} />
      <Stack.Screen name="RequestSummary" component={RequestSummary} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="PdfPreview" component={PdfPreviewScreen} />
      <Stack.Screen name="AddDocument" component={AddDocumentForm} />
      <Stack.Screen name="PdfViewer" component={PdfViewer} />
    </Stack.Navigator>
  );
};

export default DashboardNavigation;
