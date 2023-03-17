import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'

import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackPramsList } from '../../routes/app.routes'

export default function Post(){

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Posts</Text>

        </SafeAreaView>
      )
    }
    
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        backgroundColor: '#f7f7f7'
      },
      title:{
        fontSize: 30,
        fontWeight: 'bold',
        color: '#191919',
        marginBottom: 24,
      },
})