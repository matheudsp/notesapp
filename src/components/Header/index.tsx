import React,{useContext} from 'react'
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native'
import { MaterialIcons,Ionicons } from '@expo/vector-icons'; 

import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackPramsList } from '../../routes/app.routes'


import { AuthContext } from '../../contexts/AuthContext';


type HeaderProps = {
    name:string
}

export default function Header({name}: HeaderProps){
    const navigation = useNavigation<DrawerNavigationProp<StackPramsList>>();
    const { signOut } = useContext(AuthContext)



    return(
        <View style={styles.headerContainer}>
            <TouchableOpacity >
                <Ionicons name="md-menu-sharp" onPress={()=>navigation.navigate('Book')} size={25} color="black" />
            </TouchableOpacity>
            <Text style={{fontWeight:'bold', fontSize:20}}>{name}</Text>
            <TouchableOpacity>
                <MaterialIcons name="exit-to-app" size={25} color="black" onPress={signOut}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer:{
        flexDirection:'row',
        width:'100%',  
        alignItems: 'center',
        justifyContent:'space-between',
        height:'9%',
        paddingTop:'3%',
        borderBottomWidth:0.6,
        borderColor:'#9ba1ac',
        paddingStart:'5%',
        paddingEnd:'5%'
    }
})