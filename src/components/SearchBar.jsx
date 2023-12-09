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
    <div className="d-flex flex-row w-4/5 bg-slate-400 rounded-lg ">
      <Button href="/about" className="flex">
        About
      </Button>

      <form onSubmit={handleSubmit}>
        <input
          type="search"
          value={searchInput}
          onChange={handleInput}
        />
        <button type="submit">
          Agregar
        </button>
      </form>

      <Button href="/favs" className="flex">
        Your favs
      </Button>
    </div>
  );
};

export default SearchBar;