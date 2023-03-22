import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native'
import Header from '../../components/Header';
import PostItem from '../../components/PostItem';
import { AuthContext } from '../../contexts/AuthContext';
import { MaterialIcons } from "@expo/vector-icons"
import { api } from '../../services/api'

import { useRoute, RouteProp, useNavigation, useFocusEffect } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackPramsList }  from '../../routes/app.routes'
import LayoutPost from '../../components/LayoutPost';
import CreateButton from '../../components/CreateButton';
import { NoteContext } from '../../contexts/NoteContext';


export type RouteDetailParams = {
  Post:{
    bookId: string
    bookName: string
  }
}



type PostRouteProps = RouteProp<RouteDetailParams, 'Post'>;

export default function Post() {
  const route = useRoute<PostRouteProps>();
  const {bookId, bookName} = route.params
  const {loadPost, posts} = useContext(NoteContext);
  
  
  useFocusEffect(
    React.useCallback(() => {
      
      loadPost(bookId)

      
    }, [])
  );
 
  return (
    <SafeAreaView style={styles.container}>
      <Header name={'Your Notes'} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.titleContainer}>
          <MaterialIcons name="arrow-right" size={25} color="black" />
          <Text style={styles.title}>Notes of <Text style={styles.bookName}>{bookName}</Text></Text>

        </View>
        <View>
          {posts.length === 0 && (
            <Text style={styles.emptyList}>
              Nenhuma nota criada até o momento... 
            </Text>
          )}
          <LayoutPost >
          {posts.map((post, index) => <PostItem key={index} id={post.id} postId={post.id} name={post.title} text={post.text}/>)}
          </LayoutPost>
          
        </View>
      </ScrollView>
      <CreateButton isBook={false} color={"#03179c"}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    backgroundColor: '#f7f7f7'
  },
  scrollView:{
    width: '100%',
    
  },
  titleContainer:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    width:'90%',
    paddingLeft:20,
    paddingVertical:5,
    marginVertical: 10,
    
  },
  title: {
    textAlign:'center',
    fontSize: 18,
    fontWeight: '300',
    color: '#191919',
    textTransform:'uppercase'
  },bookName:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textDecorationLine:'underline'
  },
  
  emptyList:{
    width:'100%',
    textAlign:'center'
  },
  
})