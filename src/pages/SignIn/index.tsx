import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator
} from 'react-native'

import { AuthContext } from '../../contexts/AuthContext'

import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackPramsList } from '../../routes/auth.routes'

import { AntDesign } from '@expo/vector-icons'; 
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function SignIn() {
  const { signIn, loadingAuth } = useContext(AuthContext)

  const navigation = useNavigation<NativeStackNavigationProp<StackPramsList>>();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword,setShowPassword] = useState(true)

  async function handleLogin() {

    if (email === '' || password === '') {
      return;
    }

    await signIn({ email, password })

  }

  function callRegister(){
    navigation.navigate('SignUp')
  }

  return (
    <View style={styles.container}>
      <AntDesign name="login" size={80} color="#315ae1" />
      <Text style={{fontWeight:'bold', fontSize:30, marginTop:30}}>Entrar</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          placeholder="Ex: joao@gmail.com"
          style={styles.input}
          placeholderTextColor="#9ba1ac"
          value={email}
          onChangeText={setEmail}
          autoComplete='email'
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
            color: "#191919",
            marginLeft: -4,
            fontSize: 18, fontWeight: 'bold'
          }}
          onPress={() => setShowPassword(!showPassword)}
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          {loadingAuth ? (
            <ActivityIndicator size={28} color="#f7f7f7" />
          ) : (
            <Text style={styles.buttonText}>Entrar</Text>
          )}
        </TouchableOpacity>

        <TouchableOpacity onPress={callRegister}>
          <Text style={{fontSize:18, fontWeight:'400'}}>Não tem conta? Clique aqui</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7'
  },
  logo: {
    marginBottom: 18
  },
  inputContainer: {
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
    marginVertical:12
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F7F7F7'
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