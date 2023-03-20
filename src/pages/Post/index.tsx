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

import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackPramsList }  from '../../routes/app.routes'
import LayoutNotes from '../../components/LayoutNotes';

type PostProps = {
  id:string;
  name: string;
  text:string;
  bookId:string;
}

type RouteDetailParams = {
  Post:{
    bookId: string
    bookName: string
  }
}



type PostRouteProps = RouteProp<RouteDetailParams, 'Post'>;

export default function Post() {
  const route = useRoute<PostRouteProps>();
  const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();

  const [posts,setPosts] = useState<PostProps[] | []>([])

  useEffect(() => {
    async function loadPost(){
      
      const response = await api.post('/posts',{bookId: route.params.bookId})

      setPosts(response.data)
      
    }
      
    loadPost()
    
  },[])


  return (
    <SafeAreaView style={styles.container}>
      <Header name={'Your Notes'} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.titleContainer}>
          <MaterialIcons name="arrow-right" size={25} color="black" />
          <Text style={styles.title}>Notes of <Text style={styles.bookName}>{route.params.bookName}</Text></Text>

        </View>
        <View>
          {posts.length === 0 && (
            <Text style={styles.emptyList}>
              Nenhuma nota criada até o momento...
            </Text>
          )}
          <LayoutNotes >
            {posts.map((post, index) => <PostItem key={index} id={post.id} postId={post.id} name={post.name} text={post.text}/>)}
          </LayoutNotes>
          
        </View>
      </ScrollView>
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