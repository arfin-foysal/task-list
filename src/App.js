
import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import BookContextProvider from './contexts/BookContext';


function App() {
  return (
   <BookContextProvider>
     <Navbar/>
     <BookList/>
     <BookForm/>
   </BookContextProvider>
    
  );
}

export default App;
