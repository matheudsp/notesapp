import React, { useContext } from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { Ionicons, SimpleLineIcons, MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackPramsList } from '../../routes/app.routes'
import HoldMenu from '../HoldMenu';
import { HoldItem } from 'react-native-hold-menu';
import { AuthContext } from '../../contexts/AuthContext';

type HeaderProps = {
    name: string
}

export default function Header({ name }: HeaderProps) {
    const navigation = useNavigation<DrawerNavigationProp<StackPramsList>>();
    const { signOut } = useContext(AuthContext)

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity style={styles.headerItem}>
                <Ionicons style={styles.headerIcon} name="ios-menu" onPress={() => navigation.navigate('Book')} size={25} color="black" />
            </TouchableOpacity>
            <Text style={{
                fontWeight: 'bold', fontSize: 20, color: 'black', textAlign: 'center',
                textAlignVertical: 'center',
            }}>{name}</Text>
            <View style={[styles.headerItem]}>

                <HoldItem
                    activateOn='tap'
                    hapticFeedback='None'
                    
                    items={[
                        {
                            text: 'Logout',
                            icon: () => <MaterialIcons name="exit-to-app" size={25} color="black" />,
                            isDestructive: true,
                            onPress: ()=>{signOut()}
                        },
                    ]} >
                    <Ionicons style={styles.headerIcon} name="ios-ellipsis-vertical" size={20} color="black" />
                </HoldItem>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 7,
        justifyContent: 'space-between',
        height: '7%',
        backgroundColor: '#FFF',
        borderBottomWidth: 0.6,
        borderColor: '#9ba1ac',
    },
    headerItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '15%',
        height: '100%',
    },
    headerIcon:{
        textAlignVertical:"center",
        height: "100%" ,
        paddingHorizontal:13
    }

})