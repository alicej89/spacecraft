import { Button, TextInput } from "react-native-paper";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { LoginScreen } from "~/screens/LoginScreen";
import { TermsScreen  } from "~/screens/TermsScreen";
import { StarshipFeedScreen } from "~/screens/StarshipFeedScreen";

// You can import supported modules from npm
//import { Card } from 'react-native-paper';

// or any files within the Snack
//import AssetExample from './components/AssetExample';

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
          {/* <LoginScreen /> */}
          {/* <TermsScreen /> */}
          <StarshipFeedScreen />
      </PaperProvider>
    </QueryClientProvider>
  );
}

