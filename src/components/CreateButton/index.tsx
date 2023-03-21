
import React,{} from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

type ButtonProps ={
    color:string
}
export default function CreateButton({color}: ButtonProps){

    return(
        
            <TouchableOpacity 
                style={[styles.button,{backgroundColor: color}]}
                // onPress={() => navigation.navigate("contacts")}
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