import React, {useState, createContext, ReactNode, useEffect, useContext } from 'react';
import { api } from '../services/api';
import { AuthContext } from './AuthContext';

type NoteContextData = {
    isEditable: boolean;
    handleEdit: VoidFunction;
    updateNote: (credentials: NoteProps) => Promise<void>;
    loading:boolean
    loadPost: (credentials:string) => Promise<void>
    posts: PostProps[] | []
    createNote:() => Promise<string>
    loadBook:() => Promise<void>
    books: BookProps[] | []
}


type BookProps = {
    id: string;
    name: string;
    description: string;
    updatedAt: string;
    authorId: string;
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

    const { user } = useContext(AuthContext)
    
    const [isEditable, setIsEditable] = useState(false);
    const [loading, setLoading] = useState(false)
    const [posts,setPosts] = useState<PostProps[] | []>([])
    const [books, setBooks] = useState<BookProps[] | []>([])
    const [bookId,setBookId] = useState<string>()

    function handleEdit(){
        setIsEditable(!isEditable)
    }

    async function loadBook() {
        
        try{
            const response = await api.post('/book', { authorId: user.id })
          
            setBooks(response.data)
        }catch(err){
            console.log('erro ao carregar books',err)
        }
    }

    async function loadPost(bookId:string ){
        
        try{
            const response = await api.post('/post',{bookId: bookId})
            setPosts(response.data)
            setBookId(bookId)
        }
        catch(err){
            console.log('erro ao carregar notas ',err)
        }
        
        

      }

    async function createNote(){
        setLoading(true)

        try{
            const response = await api.post('/post/add',{bookId:bookId,title:'',text:''})
            const {id} = response.data
            
            setLoading(false)
            return id
              
            
            
        }
        catch(err){setLoading(false);console.log('erro ao criar nota',err)}

        
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
                posts,
                createNote,
                loadBook,
                books
                }
            }
        >
            {children}
        </NoteContext.Provider>
    )
}

