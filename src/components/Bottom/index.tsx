
import React,{

} from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import { SimpleLineIcons,Ionicons } from '@expo/vector-icons'; 





export default function Bottom(){
    

    return(
        <View style={styles.bottomContainer}>
            <TouchableOpacity style={styles.button}>
                <Ionicons name="ios-trash-bin-outline" size={25} color="black" />
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.button]}>
                <SimpleLineIcons name="options" size={25} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    bottomContainer:{
        flexDirection:'row',
        width:'100%',  
        
        justifyContent:'space-evenly',
        height:'7%',
        
        borderTopWidth:0.6,
        borderColor:'#9ba1ac',
        backgroundColor:'#9ba1ac'
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        width:'50%',
        backgroundColor:'white'
    }

})