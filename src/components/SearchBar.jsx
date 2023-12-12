import React, { useState } from "react";
import { Button } from "react-bootstrap";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");

  const handleInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchInput(""); // Limpiar el input después de la búsqueda
  };

  return (
    <div className="flex flex-row w-4/5 bg-slate-50 rounded-lg items-center justify-between m-auto "
    style={{
      backgroundImage: 'url("https://www.xtrafondos.com/thumbs/1_9386.jpg")'
    }}>
      <Button href="/about" className="flex mb-1 mt-1 ml-1">
        About
      </Button>

      <form onSubmit={handleSubmit} className="flex content-center">
        <input
          type="search"
          value={searchInput}
          onChange={handleInput}
          className="rounded-md mr-2 p-1 mt-1 mb-1 border-black border-1 bg-white"
          placeholder="Search by id"
        />
        <Button type="submit" className="bg-blue-500 mt-1 mb-1">
          Search
        </Button>
      </form>

      <Button href="/favs" className="flex mr-1 mb-1 mt-1">
        Your favs
      </Button>
    </div>
  );
};

export default SearchBar;