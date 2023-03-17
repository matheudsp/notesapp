import React, { useContext } from 'react';

import {View, ActivityIndicator} from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { AuthContext } from '../contexts/AuthContext'

function Routes(){
    const {isAuth, loading} = useContext(AuthContext);

    if(loading){
        return(
            <View style={{
                flex:1, 
                backgroundColor: '#1C6E8C', 
                justifyContent: 'center', 
                alignItems:'center' 
            }}>
                <ActivityIndicator size={40} color="#1C6E8C"/>
            </View>
        )
    }

    return(
        isAuth ? <AppRoutes /> : <AuthRoutes />
    )
}

export default Routes;