import React, { useContext } from 'react'
 import{BookContext} from '../contexts/BookContext'

export default function Navbar() {
    const {books} = useContext(BookContext)
    return (
        <div>
            <h1>Arfin Leading List</h1>
            <p>Corrently You hava {books.length} Books to get Through...</p>
        </div>
    )
}
