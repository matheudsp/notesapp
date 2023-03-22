import React from 'react'
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { StackPramsList } from '../../routes/app.routes'
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { HoldItem } from 'react-native-hold-menu';
import { Ionicons as Icons } from '@expo/vector-icons';

const MenuItems = [
  {
    text: 'Note',
    isTitle: true
  },
  {
    text: 'Share',
    icon: () => <Icons name="ios-share-outline" size={20} color="black" />,
     onPress: () => { }
  },
  {
    text: 'Change Color',
    icon: () =><Icons name="ios-color-wand-outline" size={20} color="black" />,
    withSeparator: true, onPress: () => { }
  },
  {
    text: 'Delete',
    icon: () => <Icons name="ios-trash" size={20} color="red" />,
    isDestructive: true, onPress: () => {console.log('delete clicked') }
  },
];


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
      <HoldItem
        hapticFeedback='Selection'
        containerStyles={{ position:'relative'}}
        items={MenuItems} >
        <TouchableOpacity style={styles.item} onPress={openNote}>
            <Text style={[styles.itemText, { fontSize: 18, fontWeight: 'bold' }]}>{name}</Text>
            <Text style={[styles.itemText, { fontSize: 14, fontWeight:'300'}]}>{text}</Text>
            
        </TouchableOpacity>
        </HoldItem>
        
        
    )
}

const styles = StyleSheet.create({
    
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