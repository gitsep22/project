import React from 'react'
import "./SearchResultsList.css";
import { Searchresult } from "./Searchresult.jsx";
import { MyContext } from '../App.jsx';
export const SearchResultsList = () => {
  const { results } = React.useContext(MyContext);
  if (!results || results.length === 0) {
    return null; 
  }
  else {
    return (
      <div className="results-list">
      {results.map((result, id) => (
        <Searchresult result={result.title} key={id} />
      ))}
    </div>
    )

  }  
};
