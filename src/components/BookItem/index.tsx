import React from 'react'
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { StackPramsList } from '../../routes/app.routes'
import { DrawerNavigationProp } from '@react-navigation/drawer';

type BookProps = {
    name:string
    description:string
    bookId:string
    updatedAt: String
}

export default function BookItem({name, description, bookId, updatedAt}: BookProps){
  const navigation = useNavigation<DrawerNavigationProp<StackPramsList>>();
  
  function openBook(){
    navigation.navigate('Post', { bookId: bookId , bookName: name})
  }

    return(
        <TouchableOpacity style={styles.item} onPress={openBook}>
            <Text style={[styles.itemText, { fontSize: 18, fontWeight: 'bold' }]}>{name}</Text>
            <Text style={[styles.itemText, { fontSize: 14, fontWeight:'300'}]}>{description}</Text>
            <Text style={[styles.itemText, { fontSize: 12, fontWeight: '300', alignSelf: "flex-end" }]}>{updatedAt}</Text>
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
        height: 100,
        backgroundColor: "#315ae1",
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