import React from 'react'
import { View,StyleSheet,Text,TouchableOpacity } from 'react-native'



type BookProps = {
    name:string
    description:string
}

export default function BookItem({name, description}: BookProps){

    return(
        <TouchableOpacity style={styles.item} >
            <Text style={[styles.itemText, { fontSize: 18, fontWeight: 'bold' }]}>{name}</Text>
            <Text style={[styles.itemText, { fontSize: 14, fontWeight:'300'}]}>{description}</Text>
            <Text style={[styles.itemText, { fontSize: 12, fontWeight: '300', alignSelf: "flex-end" }]}>updatedAt</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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