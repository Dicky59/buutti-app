import React, { useEffect, useState } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import bookService from './services/books';

const App = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [selectedBook, setSelectedBook] = useState([]);

  useEffect(() => {
    bookService
      .getBooks()
      .then((books) => setBooks(books))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='container'>
      <div className='columns'>
        <div className='column'>
          <BookForm
            books={books}
            setBooks={setBooks}
            title={title}
            setTitle={setTitle}
            author={author}
            setAuthor={setAuthor}
            description={description}
            setDescription={setDescription}
            selectedBook={selectedBook}
          />
        </div>
        <div className='column'>
          <BookList
            books={books}
            setTitle={setTitle}
            setAuthor={setAuthor}
            setDescription={setDescription}
            setSelectedBook={setSelectedBook}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
