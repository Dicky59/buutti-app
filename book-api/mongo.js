const mongoose = require('mongoose');

if (process.argv.length < 3) {
  console.log('give password as argument');
  process.exit(1);
}

const password = process.argv[2];

const url = `mongodb+srv://Dicky59:Laivuri9A11@cluster0.li3zz.mongodb.net/myBooks?retryWrites=true&w=majority`;

mongoose.connect(url);

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  description: String,
});

const Book = mongoose.model('Book', bookSchema);

const book = new Book({
  title: 'Nodejs on easy',
  author: 'Kekkonen',
  description: 'Elämää',
});

book.save().then((result) => {
  console.log('A book saved!');
  mongoose.connection.close();
});
