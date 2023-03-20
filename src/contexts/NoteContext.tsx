import React, {useState, createContext, ReactNode, useEffect } from 'react';
import { api } from '../services/api';

type NoteContextData = {
    isEditable: boolean;
    handleEdit: VoidFunction;
    updateNote: (credentials: NoteProps) => Promise<void>;
    loading:boolean
}

type NoteProps ={
    title:string,
    text:string
}

type NoteProviderProps = {
    children: ReactNode;
}


export const NoteContext = createContext( {} as NoteContextData);

export function NoteProvider({children}: NoteProviderProps){
    
    const [isEditable, setIsEditable] = useState(false);
    const [loading, setLoading] = useState(false)

    function handleEdit(){
        setIsEditable(!isEditable)
    }

    async function updateNote({title, text}:NoteProps){
        setLoading(true)
        setIsEditable(false)
        try{
            const response = await api.update('/post',{
                title,
                text
            })
            console.log(response.data);
            setLoading(false)

        }catch(err){
            console.log('erro ao modificar nota',err)
            setLoading(false)
        }
        
    }
    
    return(
        <NoteContext.Provider
            value={
                {
                isEditable,
                handleEdit,
                updateNote,
                loading
                }
            }
        >
            {children}
        </NoteContext.Provider>
    )
}

