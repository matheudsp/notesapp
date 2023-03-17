import React from 'react';

import Book from '../pages/Book';
import Post from '../pages/Post';
import { MaterialIcons } from '@expo/vector-icons'; 
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';

export type StackPramsList = {
    Book: {
      authorId:string
      bookId:string
    }
    Post: undefined
};


const Drawer = createDrawerNavigator<StackPramsList>();

function AppRoutes(){
    return(
      <Drawer.Navigator>
        <Drawer.Screen 
          name="Book" 
          component={Book} 
          options={{
            headerShown:false,
          }}
        />
        <Drawer.Screen 
          name="Post" 
          component={Post} 
          options={{
            headerShown:false,
          }}
        />
        
  

      </Drawer.Navigator>
    )
  }
  
  export default AppRoutes;