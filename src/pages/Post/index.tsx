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
 

type PostProps = {
  id:string;
  name: string;
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
      console.log(route.params.bookId)
      const response = await api.post('/posts',{bookId: route.params.bookId})

      console.log(response.data)
      setPosts(response.data)
    }
    
    loadPost()
    
  },[])


  return (
    <SafeAreaView style={styles.container}>
      <Header name={'Notes'} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.titleContainer}>
          <MaterialIcons name="arrow-right" size={25} color="black" />
          <Text style={styles.title}>Notes of <Text style={styles.bookName}>{route.params.bookName}</Text></Text>

        </View>
        <View style={styles.itemContainer}>
          {posts.length === 0 && (
            <Text style={styles.emptyList}>
              Nenhuma nota criada até o momento...
            </Text>
          )}

          {posts.map((post, index) => <PostItem key={index} id={post.id} postId={post.id} name={post.name}  />)}

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
    paddingHorizontal:10,
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