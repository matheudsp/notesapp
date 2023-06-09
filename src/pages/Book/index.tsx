import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { Ionicons } from "@expo/vector-icons"

import { useRoute, RouteProp, useNavigation, useFocusEffect } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackPramsList } from '../../routes/app.routes'

import { api } from '../../services/api'
import { AuthContext } from '../../contexts/AuthContext';
import Header from '../../components/Header';
import BookItem from '../../components/BookItem';

import { MaterialIcons } from '@expo/vector-icons';
import CreateButton from '../../components/CreateButton';
import { NoteContext } from '../../contexts/NoteContext';





export default function Books() {
  
  const {loadBook,books} = useContext(NoteContext)
  const {user} = useContext(AuthContext)


  useFocusEffect(
    React.useCallback(() => {
      
      loadBook();

    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <Header name={'Your Books'} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.titleContainer}>
          <MaterialIcons name="arrow-right" size={25} color="black" />
          <Text style={styles.title}>{user.name} <Text style={{ fontWeight: '300' }}>book's</Text></Text>


        </View>
        <View style={styles.itemContainer}>
          {books.length === 0 && (
            <Text style={styles.emptyList}>
              Nenhuma caderneta aberta no momento...
            </Text>
          )}
          
            {books.map((book, index) => <BookItem key={index} bookId={book.id} name={book.name} description={book.description} updatedAt={book.updatedAt} />)}
            
        </View>

      </ScrollView>
      <CreateButton isBook={true} color={"#03179c"} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 15,
    backgroundColor: '#f7f7f7',
    alignItems: 'center',


  },
  scrollView: {
    width: '100%',
    paddingHorizontal: 10,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    paddingLeft: 20,
    marginVertical: 10,
    paddingVertical: 5

  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#191919',
    textTransform: 'uppercase'
  },
  itemContainer: {
    paddingHorizontal: 5,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyList: {

  }
})