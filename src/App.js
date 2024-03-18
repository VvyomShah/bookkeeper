import { useState } from 'react';

import Header from './components/Header.js';
import SearchBar from './components/SearchBar.js';
import SearchResultsList from './components/SearchResultsList.js';

function App() {
  const [books, setBooks] = useState([]);

  return (
    <>
      <Header/>
      <div>
        <SearchBar setBooks={setBooks} />
        {books && books.length > 0 && <SearchResultsList books={books} />}
      </div>
    </>
  );
}

export default App;