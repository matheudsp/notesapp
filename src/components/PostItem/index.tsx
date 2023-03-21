import React from 'react'
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { StackPramsList } from '../../routes/app.routes'
import { DrawerNavigationProp } from '@react-navigation/drawer';


type PostProps = {
  id:string;
  name: string;
  text:string;
  postId:string;
}
export default function PostItem({name,text,postId}: PostProps){
  const navigation = useNavigation<DrawerNavigationProp<StackPramsList>>();

  function openNote(){
    navigation.navigate('Note', {postId: postId})
  }

    return(
        <TouchableOpacity style={styles.item} onPress={openNote}>
            <Text style={[styles.itemText, { fontSize: 18, fontWeight: 'bold' }]}>{name}</Text>
            <Text style={[styles.itemText, { fontSize: 14, fontWeight:'300'}]}>{text}</Text>
            
        </TouchableOpacity>
        
        
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        paddingHorizontal:5,
        flexDirection: 'row',
        flexWrap:'wrap',
        alignItems: 'center',
        justifyContent:'center'
      },
      emptyList:{
    
      },
      item: {
        width:180,
        height: 90,
        backgroundColor: "#315ae1",
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal: 15,
        borderRadius:8,
        
      },
      itemText: {
        color: '#fff',
      }
})