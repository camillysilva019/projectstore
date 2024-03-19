import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Routes from './src/routes';


export default function App() {
  return (
    <SafeAreaProvider>
    
        <NavigationContainer>
          <Routes/>
        </NavigationContainer>

    </SafeAreaProvider>
  )
}

