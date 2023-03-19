import React from 'react';

import Book from '../pages/Book';
import Post from '../pages/Post';

import { createNativeStackNavigator } from '@react-navigation/native-stack';



export type StackPramsList = {
    Book: undefined
    Post: {
      bookId:string
      bookName: string
    }
};


const Stack = createNativeStackNavigator<StackPramsList>();


function AppRoutes(){

    return(
      <Stack.Navigator>
        <Stack.Screen 
          name='Book' 
          component={Book} 
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
        
  

      </Stack.Navigator>
    )
  }
  
  export default AppRoutes;