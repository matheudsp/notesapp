import React, {useState, createContext, ReactNode, useEffect } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { api } from '../services/api'

type AuthContextData = {
    user: UserProps;
    isAuth: boolean;
    signIn:(credentials: SignInProps) => Promise<void>;
    signUp: (credentials: SignUpProps) => Promise<void>;
    loadInfo:() => Promise<BookProps>
    loadingAuth: boolean;
    loading: boolean;
    signOut: () => Promise<void>;
}

type UserProps = {
    id:string;
    name: string;
    email: string;
    token: string;

}

type BookProps = {
    id:string;
    name: string;
    description:string;
    updatedAt:string;
    authorId:string;
}

type AuthProviderProps = {
    children: ReactNode;
}

type SignInProps = {
    email: string;
    password: string;
}

type SignUpProps = {
    name: string;
    email: string;
    password: string;
}
export const AuthContext = createContext( {} as AuthContextData);

export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<UserProps>({
        id:'',
        name:'',
        email:'',
        token:''
    })
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    const isAuth = !!user.name;


    useEffect(() => {

        async function getUser(){
          //Pegar os dados salvos do user
          const userInfo = await AsyncStorage.getItem('@notesapp');
          let hasUser: UserProps = JSON.parse(userInfo || '{}')
    
          // Verificar se recebemos as informaçoes dele.
          if(Object.keys(hasUser).length > 0){
            api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}`
    
            setUser({
              id: hasUser.id,
              name: hasUser.name,
              email: hasUser.email,
              token: hasUser.token
            })
    
          }
    
          setLoading(false);
    
        }
    
    
        getUser();
    
      }, [])
    
    async function signIn({email, password}: SignInProps){
        setLoadingAuth(true);

        try{
            const response = await api.post('/entrar', {
                email,
                password
            })
            
            // console.log(response.data);

            const {id, name, token} = response.data;

            const data = {
                ...response.data
            };

            await AsyncStorage.setItem('@notesapp', JSON.stringify(data))

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`


            setUser({
                id,
                name,
                email,
                token
            })

            setLoadingAuth(false);
        }catch(err){
            console.log('erro ao acessar',err)
            setLoadingAuth(false);
        }
    }

    async function loadInfo() {
        setLoading(true);
        
        try{
            const response = await api.post('/books', {authorId: user.id})

            setLoading(false);
            return (response.data);
            

        }catch(err){
            console.log('erro ao acessar',err)
            setLoading(false);
        }
        
      } 
    

    async function signUp({name, email, password}: SignUpProps){
        setLoadingAuth(true);

        try{
            const response = await api.post('/usuario', {
                email,
                name,
                password
            })
            console.log(response.data);


            setLoadingAuth(false);
        }catch(err){
            console.log('erro ao acessar',err)
            setLoadingAuth(false);
        }
    }

    async function signOut(){
        await AsyncStorage.clear()
        .then( () => {
            setUser({
                id: '',
                name: '',
                email: '',
                token: ''
            })
        })
    }

    return(
        <AuthContext.Provider
            value={
                {
                user,
                isAuth,
                signIn,
                signUp,
                loading,
                loadingAuth,
                signOut,
                loadInfo
                }
            }
        >
            {children}
        </AuthContext.Provider>
    )
}

