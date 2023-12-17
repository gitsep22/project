import React, { createContext, useState, useEffect } from 'react';
import Searchbar from './Component/Searchbar';
import GridListView from './Component/GridListView';
import { SearchResultsList } from './Component/SearchResultsList';

export const MyContext = createContext();
export default function App() {
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(response => response.json())
      .then(data => {
        setResults(data);
      });
  }, []);

  return (
    <MyContext.Provider value={{ results, setResults }}>
      <div className="container">
        <Searchbar setResults={setResults}/> 
        {results && results.length > 0 && <SearchResultsList results={results} />}
        <GridListView />
      </div>
    </MyContext.Provider>
  );
}
