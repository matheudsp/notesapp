import React,{useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import { Ionicons } from "@expo/vector-icons"

import { useRoute,RouteProp, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackPramsList } from '../../routes/app.routes'

import { api } from '../../services/api'
import { AuthContext } from '../../contexts/AuthContext';
import Header from '../../components/Header';
import BookItem from '../../components/BookItem';

type RouteDetailParams = {
  Book:{
    author_id: string
  }
}

type BookProps = {
  id:string;
  name: string;
  description:string;
  updatedAt:string;
  authorId:string;
}

// type BookRouterProps = RouteProp<RouteDetailParams, 'Book'>;

export default function Book() {
  const { user, loadInfo} = useContext(AuthContext)

  // const route = useRoute<BookRouterProps>();
  // const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();

  const [books,setBooks] = useState<BookProps[] | []>([])


  async function loadBook() {
    await loadInfo()
    setBooks(response.data)
  } 



  return (
    <SafeAreaView style={styles.container}>
      <Header name={'Books'}/>
      <ScrollView style={styles.scrollView}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>All books</Text>
        <Ionicons style={styles.reload} onPress={loadBook} name="reload" size={24} color="black" />
        
      </View>
      <View style={styles.itemContainer}>
        {books.length === 0 && (
          <Text style={styles.emptyList}>
            Nenhuma caderneta aberta no momento...
          </Text>
        )}

        {books.map((book, index) => <BookItem key={index} name={book.name} description={book.description}/> )}
        
      </View>
      </ScrollView>
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
  scrollView:{
    width: '100%',
    paddingHorizontal:10,
  },
  titleContainer:{
    width: '90%',
    flexDirection: 'row',
    alignContent:'center',
    alignItems: 'baseline',
    marginVertical: 10,
    paddingLeft:5
  },
  reload:{
    marginLeft:10
  },
  title: {
    
    fontSize: 30,
    fontWeight: 'bold',
    color: '#191919',
  },
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