import React, {useState, createContext, ReactNode, useEffect } from 'react';
import { api } from '../services/api';

type NoteContextData = {
    isEditable: boolean;
    handleEdit: VoidFunction;
    updateNote: (credentials: NoteProps) => Promise<void>;
    loading:boolean
    loadPost: (credentials:PostProps) => Promise<void>
    posts: PostProps[] | []
}

export type NoteProps ={
    title:string,
    text:string,
    postId:string
}

type NoteProviderProps = {
    children: ReactNode;
}
export type PostProps = {
    map(arg0: (post: { id: string; title: string; text: string; }, index: React.Key | null | undefined) => JSX.Element): React.ReactNode;
    length: number;
    id:string;
    title: string;
    text:string;
    bookId:string;
  }


export const NoteContext = createContext( {} as NoteContextData);

export function NoteProvider({children}: NoteProviderProps){
    
    const [isEditable, setIsEditable] = useState(false);
    const [loading, setLoading] = useState(false)
    const [posts,setPosts] = useState<PostProps[] | []>([])

    function handleEdit(){
        setIsEditable(!isEditable)
    }

    async function loadPost({bookId}:PostProps ){
        
        const response = await api.post('/post',{bookId: bookId})
        setPosts(response.data)
        

      }

    async function updateNote({postId,title, text}:NoteProps){
        setLoading(true)
        setIsEditable(false)
        
        try{
            const response = await api.put('/post/update',{
                postId,
                title,
                text
            })
            
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
                loading,
                loadPost,
                posts
                }
            }
        >
            {children}
        </NoteContext.Provider>
    )
}

