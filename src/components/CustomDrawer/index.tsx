import React from 'react'
import {View,Text} from 'react-native'
import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer'


export default function CustomDrawer(props:any){
    return(
        <View style={{flex:1,}}>
            <DrawerContentScrollView {...props} contentContainerStyle={{backgroundColor:'blue'}}>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
        </View>
    )
}