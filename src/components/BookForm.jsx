import React, { useContext,useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const {addBook} = useContext(BookContext)
    const [title, settitle] = useState('');
    const [author, setauthor] = useState('');
    const handelSubmit=(e)=>{
        e.preventDefault()
        addBook(title,author)
        settitle("")
        setauthor("")
    }
    return (
        <div>
            <form onSubmit={handelSubmit}>
                <input type="text" name="" value={title} id="" onChange={(e)=>settitle(e.target.value)} />
                <input type="text" name="" value={author} id="" onChange={(e)=>setauthor(e.target.value)} />
               <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default BookForm;