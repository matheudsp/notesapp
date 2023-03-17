import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'

import { AuthProvider } from './src/contexts/AuthContext'


export default function App() {
  
  return (
    <NavigationContainer>
      <AuthProvider>
          
          <StatusBar backgroundColor="#f7f7f7" barStyle="dark-content" translucent={true} />
          <Routes/>

      </AuthProvider>
    </NavigationContainer>
  );
}

