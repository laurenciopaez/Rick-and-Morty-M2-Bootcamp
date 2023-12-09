//Know the delete, orders and filters will be responsability of the actions and state life cicle
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Cards from "./Cards.jsx";
import SearchBar from "./SearchBar.jsx";
import { fetchCharacters } from "../redux/actions/actions.js";


const Home = ({ characters, fetchCharacters }) => {

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <div >
      <div >
        <SearchBar />
      </div>
      <Cards characters={characters} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  characters: state.characters,
});

export default connect(mapStateToProps, { fetchCharacters })(Home);
