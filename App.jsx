import React, { useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);
  const [newBookTitle, setNewBookTitle] = useState('');

  const handleChange = (e) => {
    setNewBookTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newBookTitle.trim() === '') return;
    const newBook = {
      id: Date.now(),
      title: newBookTitle.trim()
    };
    setBooks([...books, newBook]);
    setNewBookTitle('');
  };

  const handleDelete = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  return (
    <div className="App">
      <h1>My Book List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter book title"
          value={newBookTitle}
          onChange={handleChange}
        />
        <button type="submit">Add Book</button>
      </form>
      <ul>
        {books.map((book) => (
          <li key={book.id} className="book-item">
            <span>{book.title}</span>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
