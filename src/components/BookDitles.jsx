import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDitles = (props) => {
    const {removeBook} = useContext(BookContext)
    return (
        <div>
            <li onClick={()=>removeBook(props.Book.id)}>{props.Book.title} <br></br>{props.Book.author}</li>
            <hr />
        </div>
    );    
};

export default BookDitles;