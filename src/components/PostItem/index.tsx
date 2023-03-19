import React from 'react'
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { StackPramsList } from '../../routes/app.routes'
import { DrawerNavigationProp } from '@react-navigation/drawer';


type PostProps = {
  id:string;
  name: string;

  postId:string;
}
export default function PostItem({name, id}: PostProps){
  const navigation = useNavigation<DrawerNavigationProp<StackPramsList>>();

  function openBook(){
    // navigation.navigate('Post')
    console.log('abrir nota')
  }

    return(
        <TouchableOpacity style={styles.item} onPress={openBook}>
            <Text style={[styles.itemText, { fontSize: 18, fontWeight: 'bold' }]}>{name}</Text>
            
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal:5,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center'
      },
      emptyList:{
    
      },
      item: {
        width:'100%',
        height: 90,
        backgroundColor: "#80558C",
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 15,
        borderRadius:8,
        marginBottom:"1%"
      },
      itemText: {
        color: '#fff',
      }
})