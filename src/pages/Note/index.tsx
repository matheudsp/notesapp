import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StyleProp,
  ViewStyle
} from 'react-native'
import Bottom from '../../components/Bottom';
import HeaderNote from '../../components/HeaderNote';
import { api } from '../../services/api';
import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'

import { NoteContext } from '../../contexts/NoteContext';


type RouteDetailParams = {
  Note:{
    postId: string;
  }
}

type PostRouteProps = RouteProp<RouteDetailParams, 'Note'>;


export default function Note() {
  const route = useRoute<PostRouteProps>();

  const {isEditable, handleEdit} = useContext(NoteContext)
  const [disabledStyle, setDisabledStyle] = useState<StyleProp<ViewStyle>>();

  const [title, setTitle] = useState<string>('')
  const [text,setText] = useState<string>('')


  useEffect(() => {
    async function loadNote(){
      const response = await api.post('/post/post', {postId: route.params.postId}) 
      
     
      const [{title,text}] = response.data
      
      setTitle(title)
      setText(text)
    }

    loadNote();
    
  },[])

  useEffect(() => {
    if (!isEditable) {
      setDisabledStyle({opacity:0.5});
    } else {
      setDisabledStyle({opacity: 1});
    }
  }, [isEditable]);



 
  
  return (

    <SafeAreaView style={styles.container}>
      <HeaderNote title={title} text={text} postId={route.params.postId}/>
      <ScrollView style={styles.scrollView}>

      <View style={styles.inputContainer}>
          
            <TextInput 
              placeholder='title | Example: Run 🏃‍♀️'
              style={[styles.inputName, styles.input, disabledStyle]}
              value={title}
              onChangeText={setTitle}
              maxLength={30}
              editable={isEditable}
            />
            <ScrollView style={styles.scrollView}>
            <TextInput 
              placeholder='Details | Example: I ran 5 km today, and I keep improving, I did it in 35min 😎'
              style={[styles.inputText, styles.input,disabledStyle]}
              value={text}
              onChangeText={setText}
              multiline={true}
              allowFontScaling              
              editable={isEditable}
              autoFocus={true}
              
              
            />
            </ScrollView>
          </View>
        
      </ScrollView>
      
        {/* <Bottom /> */}
      
    </SafeAreaView>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    backgroundColor: '#f7f7f7'
  },
  scrollView:{
    width:'100%',
    height:'100%'
    
  },
  inputContainer:{
    paddingTop:18,
    paddingHorizontal:15,
    height:'100%'
  },
  input:{
    padding:15,
    color:'#191919'
  },

  inputName:{
    fontSize:20,
    fontWeight:'700',
    
  },
  inputText:{
    height:"100%",
    fontSize:18,
    fontWeight:'400',
    
 
  }
  
})