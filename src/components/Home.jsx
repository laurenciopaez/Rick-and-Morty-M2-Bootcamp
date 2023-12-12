//Know the delete, orders and filters will be responsability of the actions and state life cicle
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Cards from "./Cards.jsx";
import SearchBar from "./SearchBar.jsx";
import Filters from "./Filters.jsx";
import { fetchCharacters } from "../redux/actions/actions.js";

const Home = ({ characters, fetchCharacters }) => {
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <div
      style={{
        backgroundImage: `url("https://i.pinimg.com/564x/e0/c7/47/e0c747a9d869f40f6d572a651791bdb5.jpg")`,
        width: "screen",
      }}
    >
      <div className="mt-2 mb-2 w-full">
        <SearchBar />
      </div>
      <div className="w-full flex flex-row">
        <div className="w-1/3 m-1 p-1 bg-slate-50 rounded-md">
          <Filters />
        </div>
        <div className="w-2/3 container mt-1">
          <Cards characters={characters} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  characters: state.characters,
});

export default connect(mapStateToProps, { fetchCharacters })(Home);
