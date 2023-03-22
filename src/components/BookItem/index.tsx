import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, ActivityIndicator, Button } from 'react-native'

import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { StackPramsList } from '../../routes/app.routes'
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { HoldItem } from 'react-native-hold-menu';
import { Ionicons as Icons } from '@expo/vector-icons';
import { api } from '../../services/api';
import { NoteContext } from '../../contexts/NoteContext';




type BookProps = {
  name: string
  description: string
  bookId: string
  updatedAt: String
  key: number
}


export default function BookItem({ name, description, bookId, updatedAt }: BookProps) {
  const {loadBook} = useContext(NoteContext)
  const navigation = useNavigation<DrawerNavigationProp<StackPramsList>>();
  const [selectedBook, SetSelectedBook] = useState<BookProps | undefined>()
  function openBook() {
    navigation.navigate('Post', { bookId: bookId, bookName: name })
  }

  async function deleteBook(bookId: string) {
    
    const response = await api.delete('/book/remove', { data: { bookId } })
    console.log(response.data)

    loadBook()

  }

  useFocusEffect(
    React.useCallback(() => {
      
      

    }, [])
  );


  return (
    <HoldItem
      hapticFeedback='Selection'
      activateOn='hold'

      containerStyles={{ width: "100%", position: 'relative' }}
      items={[
        {
          text: 'Book',
          isTitle: true
        },
        {
          text: 'Share',
          icon: () => <Icons name="ios-share-outline" size={20} color="black" />,
          onPress: () => { }
        },
        {
          text: 'Change Color',
          icon: () => <Icons name="ios-color-wand-outline" size={20} color="black" />,
          withSeparator: true, onPress: () => { }
        },
        {
          text: 'Delete',
          icon: () => <Icons name="ios-trash" size={20} color="red" />,
          isDestructive: true,
          onPress: () => { deleteBook(bookId) }
        },
      ]} >
      <TouchableOpacity style={styles.item} onPress={openBook} >
        <Text style={[styles.itemText, { fontSize: 18, fontWeight: 'bold' }]}>{name}</Text>
        <Text style={[styles.itemText, { fontSize: 14, fontWeight: '300' }]}>{description}</Text>
        <Text style={[styles.itemText, { fontSize: 12, fontWeight: '300', alignSelf: "flex-end" }]}>Last update: {updatedAt}</Text>
      </TouchableOpacity>
    </HoldItem>
  )
}

const styles = StyleSheet.create({
  item: {
    width: '100%',
    height: 100,
    backgroundColor: "#315ae1",
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingHorizontal: 15,
    borderRadius: 8,
    marginBottom: "1%"
  },
  itemText: {
    color: '#fff',
  }
})