import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDitles from './BookDitles';

const BookList = () => {
    const {books} = useContext(BookContext)
    return books.length? (
        <div>
            <ul>{books.map((data)=>{
                return <BookDitles key={data.id} Book={data}/> 
              
            })}
            </ul>
            
        </div>
    ): (<div>No Books Hello :)</div>)
};

export default BookList;