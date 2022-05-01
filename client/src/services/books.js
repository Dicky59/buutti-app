import axios from 'axios';
const baseUrl = '/api/books';

const getBooks = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const postBook = (newBook) => {
  const request = axios.post(baseUrl, newBook);
  return request.then((response) => response.data);
};

const deleteBook = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

const updateBook = (id, updatedBook) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedBook);
  return request.then((response) => response.data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getBooks,
  postBook,
  deleteBook,
  updateBook,
};
