import { useGlobalContext } from "../context";
import { useState } from "react";
const Search = () => {
  const [text, setText] = useState("");
  const { fetchList, setSearchTerm, fetchRandomMeal } = useGlobalContext();
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setSearchTerm(text);
      setText("");
    }
  };
  const handleRandomMeal = () => {
    setSearchTerm("");
    setText("");
    fetchRandomMeal();
  };
  return (
    <header className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={handleChange}
          className="form-input"
          type="text"
          placeholder="Search..."
        />
        <button className="btn" type="submit">
          Search
        </button>
        <button className="btn" onClick={fetchList} type="submit">
          All
        </button>
        <button
          onClick={handleRandomMeal}
          className="btn btn-hipster"
          type="button"
        >
          Surprise me
        </button>
      </form>
    </header>
  );
};
export default Search;
