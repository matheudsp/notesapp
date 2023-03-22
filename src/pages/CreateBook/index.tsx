import React, { useContext, useState } from 'react'
import { View,Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import Header from '../../components/Header'
import { AuthContext } from '../../contexts/AuthContext'
import { api } from '../../services/api'

import { useNavigation } from '@react-navigation/native'
import { StackPramsList } from '../../routes/app.routes'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'


export default function CreateBook(){
    const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();
    const {user} = useContext(AuthContext)
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [loading,setLoading] = useState(false)
    
    async function handleAddBook(){
        setLoading(true)
        
        if (name === '') {
            return;
          }

        try{
            const response = await api.post('/book/add',{ authorId: user.id,name, description })
            const {id} = response.data
            setLoading(false)
            navigation.navigate('Post', { bookId: id , bookName: name})
            }
        catch(err){
            console.log(err)
            setLoading(false)}


    }
    
    return(
        <SafeAreaView style={styles.container}>
            <Header name={'Create Book'}/>
            <View style={styles.inputContainer}>
            <View style={styles.labelContainer}><Text style={styles.label}>Title of book</Text></View>
            <TextInput
            placeholder="ex: my book"
            style={styles.input}
            placeholderTextColor="#9ba1ac"
            value={name}
            onChangeText={setName}
            autoComplete='email'
            />

            <View style={styles.labelContainer}><Text style={styles.label}>Description of book --optional</Text></View>
            <TextInput
            placeholder="ex: today was fun for me "
            style={[styles.input,{height:120,textAlignVertical:'top'}]}
            placeholderTextColor="#9ba1ac"
            value={description}
            onChangeText={setDescription}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddBook}>
            {loading ? (
                <ActivityIndicator size={28} color="#f7f7f7" />
            ) : (
                <Text style={styles.buttonText}>Add Book</Text>
            )}
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 15,
      backgroundColor: '#f7f7f7',
      alignItems: 'center',

    },
    inputContainer: {
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 14,
        
        
      },
      input:{
        width: '95%',
        height: 55,
        backgroundColor:'#f7f7f7',
        borderColor:"#9ba1ac",
        borderWidth:1,
        marginBottom: 8,
        borderRadius: 12,
        paddingVertical:15,
        paddingHorizontal: 20,
        fontSize:18,
        fontWeight:'400',
        color: '#191919',
        
      },
      button:{
        width: '95%',
        height: 50,
        backgroundColor: '#315ae1',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems:'center', 
        marginVertical:12
      },
      buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#F7F7F7'
      },
      labelContainer:{
        backgroundColor:"#f7f7f7",
        alignSelf:'flex-start',
        
        paddingHorizontal: 6,
        
        marginLeft:25,
        marginBottom:-10,
        zIndex:1,
        
      },
      label:{
        
        borderRadius:4,
        color:"#FFF",
        fontWeight: 'bold',
        fontSize: 15,
        paddingHorizontal: 6,
        backgroundColor:"#315ae1",
        
      },
})