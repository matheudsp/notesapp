import React, { useState, useContext } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import { FontAwesome, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';

import { useRoute, RouteProp, useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackPramsList } from '../../routes/app.routes'

import { NoteProps } from '../../contexts/NoteContext';

import { NoteContext } from '../../contexts/NoteContext';

export default function HeaderNote({  title, text, postId}: NoteProps) {
    const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();
    const { isEditable,handleEdit, updateNote, loading} = useContext(NoteContext);

    const [isLiked, setIsLiked] = useState(false)
    const [iconLike, setIconLike] = useState('favorite-border')


    function handleLike() {
        setIsLiked(!isLiked)
        if (isLiked) {
            setIconLike('favorite')
        } else {
            setIconLike('favorite-border')
        }
    }

    async function saveNote(){ 
        
        if(title === ''){
            return
        }

        
        await updateNote({postId,title,text})
        
    }
    
    function handleBack(){
        navigation.goBack()
        
        if(!isEditable){
            handleEdit
        }
    }

    return (
        <View style={styles.headerContainer}>
            <View style={[styles.headerItem, { justifyContent: 'flex-start', paddingStart: 10 }]}>
                <TouchableOpacity style={styles.headerContent}>
                    <MaterialIcons name="arrow-back-ios" onPress={handleBack} size={22} color="black" />

                </TouchableOpacity>
                <Text style={{
                    fontWeight: '600', fontSize: 20, color: 'black', textAlign: 'center',
                    textAlignVertical: 'center',
                }}>Note
                </Text>
            </View>
            <View style={[styles.headerItem, { justifyContent: 'flex-end', paddingEnd: 10 }]}>
                {!isEditable && (
                    <TouchableOpacity style={styles.headerContent}>
                        <FontAwesome name='edit' size={24} color="black" onPress={handleEdit}/>
                    </TouchableOpacity>
                ) }

                {!isEditable && (
                    <TouchableOpacity style={styles.headerContent}>
                        <MaterialIcons name={iconLike} onPress={handleLike} size={24} color="black" />
                    </TouchableOpacity>
                )}

                {isEditable && (
                    <TouchableOpacity style={styles.headerContent} onPress={saveNote}>
                        {loading ? (
                                <ActivityIndicator size={25} color="#191919" />       
                            ) : (<Text style={{
                                fontWeight: '700', fontSize: 18, color: 'black', textAlign: 'center',
                                textAlignVertical: 'center',
                            }}>Save
                                
                            </Text>)}
                        
                    </TouchableOpacity>
                )}
                <TouchableOpacity style={styles.headerContent}>
                    <SimpleLineIcons name="options-vertical" size={18} color="black" />
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 7,

        height: '7%',


        borderBottomWidth: 0.6,
        borderColor: '#9ba1ac',

    },
    headerItem: {

        flex: 1, flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
    },
    headerContent: {
        
        paddingHorizontal: 15
    }
})