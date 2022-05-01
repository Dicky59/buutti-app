import React from 'react';

const BookList = ({
  books,
  setTitle,
  setAuthor,
  setDescription,
  setSelectedBook,
}) => {
  if (!books) {
    return <div>loading books...</div>;
  }

  return (
    <div className='panel'>
      <p className='panel-heading'>Books</p>
      <div>
        {books.map((book) => (
          <div
            className='panel-block'
            key={book.id}
            onClick={() => {
              setTitle(book.title);
              setAuthor(book.author);
              setDescription(book.description);
              setSelectedBook(book);
            }}
          >
            {book.title} - {book.author}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
