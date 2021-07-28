
import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

export const BookContext = React.createContext()

const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
       {title:'JavaScript Book',author:'Brandan Eich',id:1},  
       {title:'Python Book',author:'Van Russam',id:2},  
    ])
   const addBook=(title,author)=>{
        setBooks([...books,{title:title,author:author,id:uuidv4()}]);    
   };
  
   
    const removeBook=(id)=>{
        setBooks(books.filter((book)=>{
            return book.id !==id;
            
        }) )
    }


   return(
       <BookContext.Provider value={{books,addBook,removeBook}}>
          {props.children}
          
       </BookContext.Provider>
   )
};

export default BookContextProvider;