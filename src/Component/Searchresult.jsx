import "./Searchresult.css";
export const Searchresult = ({ result }) => {
  
  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};