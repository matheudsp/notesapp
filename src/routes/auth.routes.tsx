import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp'

export type StackPramsList = {
    SignIn: undefined;
    SignUp: undefined;
  };

const Stack = createNativeStackNavigator<StackPramsList>();

function AuthRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
            <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

export default AuthRoutes;