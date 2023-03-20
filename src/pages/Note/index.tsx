import React, { useState, useContext, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native'
import Bottom from '../../components/Bottom';
import HeaderNote from '../../components/HeaderNote';



import { NoteContext } from '../../contexts/NoteContext';

export default function Note() {

  const {isEditable, handleEdit} = useContext(NoteContext)

  const [title, setTitle] = useState('')
  const [text, setText] = useState('')

  useEffect(() => {
    async function loadNote(){
      const response = await api.post('/post', {}) //postId
      
      setTitle('')
      setText('')
      
    }

    loadNote();
  },[])


  async function handleSaveNote(){
    if(title === ''){
      return
    }

    // await updateNote({title, text})
  }
  
  return (

    <SafeAreaView style={styles.container}>
      <HeaderNote name={'Note'}/>
      <ScrollView style={styles.scrollView}>

      <View style={styles.inputContainer}>
            <TextInput 
              placeholder='Title | Example: Run 🏃‍♀️'
              style={[styles.inputTitle, styles.input]}
              value={title}
              onChangeText={setTitle}
              maxLength={30}
              editable={!isEditable}
            />
            <ScrollView style={styles.scrollView}>
            <TextInput 
              placeholder='Details | Example: I ran 5 km today, and I keep improving, I did it in 35min 😎'
              style={[styles.inputText, styles.input]}
              value={text}
              onChangeText={setText}
              multiline={true}
              allowFontScaling              
              editable={!isEditable}
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
    
  },

  inputTitle:{
    fontSize:20,
    fontWeight:'700'
  },
  inputText:{
    height:"100%",
    fontSize:18,
    fontWeight:'400',
    
    
    
    
  }
})