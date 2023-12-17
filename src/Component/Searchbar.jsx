import React from 'react';
import "./Searchbar.css";
import { MyContext } from '../App.jsx';
import { FaSearch } from "react-icons/fa";

const Searchbar = ({ setResults }) => {
  const { results } = React.useContext(MyContext);
  const [input, setInput] = React.useState('');
  const fetchData = (value) => {
  
      const result = results.filter((user) =>
        value &&
        user &&
        user.title &&
        user.title.toLowerCase().includes(value.toLowerCase())
      );
      setResults(result);
    
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input }
        onChange={(e) => handleChange(e.target.value)}
      />
      
    </div>
  );
};
export default Searchbar;
