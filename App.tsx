import AppNavigator from './screens/navigators/AppNavigator';
import {AuthProvider} from './AuthContext';
export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
