import { Button, TextInput } from "react-native-paper";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { LoginScreen } from "./src/screens/LoginScreen";
import { TermsScreen } from "./src/screens/TermsScreen";

// You can import supported modules from npm
//import { Card } from 'react-native-paper';

// or any files within the Snack
//import AssetExample from './components/AssetExample';

export default function App() {
  return (
    <PaperProvider>
        {/* <LoginScreen /> */}
        <TermsScreen />
    </PaperProvider>
  );
}

