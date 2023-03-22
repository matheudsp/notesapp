import React from 'react';

import Book from '../pages/Book';
import Post from '../pages/Post';
import Note from '../pages/Note';
import CreateBook from '../pages/CreateBook';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HoldMenuProvider } from 'react-native-hold-menu';
import { Ionicons } from '@expo/vector-icons';
export type StackPramsList = {
    Book: undefined
    Post: {
      bookId:string
      bookName: string
    }
    Note:{
      postId: string
    }
    CreateBook:undefined
    
};


const Stack = createNativeStackNavigator<StackPramsList>();


function AppRoutes(){

    return(
      <HoldMenuProvider iconComponent={Ionicons} theme="light">
      <Stack.Navigator>
        <Stack.Screen 
          name='Book' 
          component={Book} 
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen 
          name='CreateBook'
          component={CreateBook}
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen 
          name="Post" 
          component={Post} 
          options={{
            headerShown:false,
          }}
        />
        <Stack.Screen 
          name="Note" 
          component={Note} 
          options={{
            headerShown:false,          
          }}
        />

  
      </Stack.Navigator>
      </HoldMenuProvider>
    )
  }
  
  export default AppRoutes;