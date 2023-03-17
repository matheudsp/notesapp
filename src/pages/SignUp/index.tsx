import React, { useState, useContext} from 'react';
import { 
  View, 
  Text, 
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackPramsList } from '../../routes/auth.routes'

import { MaterialIcons } from '@expo/vector-icons'; 
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { AuthContext } from '../../contexts/AuthContext'

export default function SignUp(){
    const { signUp, loadingAuth} = useContext(AuthContext)

    const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [showPassword,setShowPassword] = useState(true)

    

    async function handleRegister(){

        if(email === '' || password === '' || name === ''){
          return;
        }
    
        await signUp({name, email, password,  })
        
        navigation.navigate('SignIn')

        setName('');
        setPassword('');
        setEmail('');

    }

    function callLogin(){
      navigation.navigate('SignIn')
    }
    
    return(
      <View style={styles.container}>
      
        <MaterialIcons name="account-circle" size={80} color="#315ae1" />
        <Text style={{fontWeight:'bold', fontSize:30, marginTop:30}}>Criar Conta</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome & Sobrenome</Text>
          <TextInput
            placeholder="Ex: João da Silva"   
            style={styles.input}     
            placeholderTextColor="#9ba1ac"
            
            value={name}
            onChangeText={setName}
          />
          
          <Text style={styles.label}>E-mail</Text>
          <TextInput
            placeholder="Ex: joao@gmail.com"   
            style={styles.input}     
            placeholderTextColor="#9ba1ac"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.label}>Senha</Text>
          <TextInput
            placeholder="Use 6 ou mais caracteres"      
            style={styles.input}   
            placeholderTextColor="#9ba1ac"
            secureTextEntry={showPassword}
            value={password}
            onChangeText={setPassword}          
          />     
          
          <BouncyCheckbox
            size={20}
            fillColor={"#191919"}
            // unfillColor={"#9ba1ac"}
            text="Mostrar Senha"
            
            textStyle={{
              textDecorationLine: "none",
              color:"#191919",
              marginLeft:-4,
              fontSize:18,fontWeight:'bold'
            }}
            onPress={() => setShowPassword(!showPassword)}
          />

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            { loadingAuth ? (
              <ActivityIndicator size={28} color="#f7f7f7"/>
            ) : (
              <Text style={styles.buttonText}>
                Criar Conta
              </Text>
              
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={callLogin}>
            <Text style={{fontSize:18, fontWeight:'400'}}>Já têm conta? Clique aqui</Text>
          </TouchableOpacity>   
        </View>

    </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#f7f7f7'
      },
      logo:{
        marginBottom: 18
      },
      inputContainer:{
        width: '95%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 32,
        paddingHorizontal: 14,
      },
      input:{
        width: '95%',
        height: 55,
        backgroundColor:'#f7f7f7',
        borderColor:"#9ba1ac",
        borderWidth:1,
        marginBottom: 8,
        borderRadius: 12,
        paddingHorizontal: 20,
        fontSize:18,
        fontWeight:'500',
        color: '#191919',
      },
      button:{
        width: '95%',
        height: 50,
        backgroundColor: '#315ae1',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems:'center',
        
        marginVertical:12,

      },
      buttonText:{
        fontSize: 18, 
        fontWeight: 'bold',
        color: '#F7F7F7',
      },
      label:{
        color:"#191919",
        marginBottom:-10,
        backgroundColor:"#f7f7f7",
        fontWeight: 'bold',
        fontSize: 15,
        marginLeft:25,
        alignSelf:'flex-start',
        paddingHorizontal: 4,
        borderTopLeftRadius:4,
        borderTopRightRadius:4,
        zIndex:1
      },
      
})