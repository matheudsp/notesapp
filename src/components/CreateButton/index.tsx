
import React,{ useContext } from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackPramsList } from '../../routes/app.routes';
import { NoteContext } from '../../contexts/NoteContext';


type ButtonProps ={
    color:string
    isBook:boolean
}
export default function CreateButton({color, isBook}: ButtonProps){
    const {createNote} = useContext(NoteContext)
    const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();
    
    async function CreateFunction(){
        if(isBook === false){
            const CreateNote = new (createNote as any)
            const id = await CreateNote
            navigation.navigate('Note',{postId: id})
        }else{
            navigation.navigate('CreateBook')
        }
    }

    return(
            <TouchableOpacity
                onPress={CreateFunction}
                style={[styles.button,{backgroundColor: color}]}
                >
                <AntDesign name="addfile" size={24} color="#FFF" />
            </TouchableOpacity>
       
    )
}

const styles = StyleSheet.create({
    
    button:{
        position: "absolute",
        right: 20,
        bottom: 20,
        borderRadius: 60,
        width: 60,
        height: 60,

        alignItems: "center",
        justifyContent: "center",
    }

})