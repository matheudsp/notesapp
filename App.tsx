import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'

import { AuthProvider } from './src/contexts/AuthContext'
import { NoteProvider } from './src/contexts/NoteContext';


export default function App() {
  
  return (
    <NavigationContainer>
      <AuthProvider>
        <NoteProvider>
          <StatusBar backgroundColor="#f7f7f7" barStyle="dark-content" translucent={true} />
          
            <Routes/>
          
          </NoteProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

