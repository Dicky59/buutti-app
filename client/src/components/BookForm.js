import React from 'react';
import bookService from '../services/books';

const BookForm = ({
  books,
  setBooks,
  title,
  setTitle,
  author,
  setAuthor,
  description,
  setDescription,
  selectedBook,
}) => {
  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onAuthorChange = (event) => {
    setAuthor(event.target.value);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const clearForm = () => {
    setTitle('');
    setAuthor('');
    setDescription('');
  };

  const addBook = (event) => {
    event.preventDefault();

    const newBook = { title, author, description };

    bookService
      .postBook(newBook)
      .then((returnedBook) => {
        setBooks(books.concat(returnedBook));
      })
      .catch((err) => {
        console.log(err);
      });
    clearForm();
  };

  const deleteBook = () => {
    bookService
      .deleteBook(selectedBook.id)
      .then(() => {
        setBooks(
          books.filter((book) => {
            return book.id !== selectedBook.id;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
    clearForm();
  };

  const updateBook = (event) => {
    event.preventDefault();

    const newBook = { title, author, description };

    bookService
      .updateBook(selectedBook.id, newBook)
      .then((updatedBook) => {
        setBooks(
          books.map((book) => {
            return book.id === selectedBook.id ? (book = updatedBook) : book;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
    clearForm();
  };

  return (
    <div>
      <p className='panel-heading'>Book Collection</p>
      <div className='field'>
        <label className='label'>Title</label>
        <input
          className='input is-link'
          type='text'
          value={title}
          onChange={(event) => onTitleChange(event)}
          required
        />
      </div>
      <div className='field'>
        <label className='label'>Author</label>
        <input
          className='input is-link'
          type='text'
          value={author}
          onChange={(event) => onAuthorChange(event)}
          required
        />
      </div>
      <div className='field'>
        <label className='label'>Description</label>
        <textarea
          className='textarea is-link'
          type='textarea'
          rows='6'
          value={description}
          onChange={(event) => onDescriptionChange(event)}
          required
        />
      </div>
      <div className='field is-grouped'>
        <p className='control'>
          <button className='button is-link' onClick={addBook}>
            Save New
          </button>
        </p>
        <p className='control'>
          <button className='button is-warning' onClick={updateBook}>
            Save
          </button>
        </p>
        <p className='control'>
          <button className='button is-danger' onClick={deleteBook}>
            Delete
          </button>
        </p>
      </div>
    </div>
  );
};

export default BookForm;
