//Know the delete, orders and filters will be responsability of the actions and state life cicle
import React, { useEffect } from "react";
import { connect } from "react-redux";
import Cards from "./Cards.jsx";
import SearchBar from "./SearchBar.jsx";
import Filters from "./Filters.jsx";
import { fetchCharacters } from "../redux/actions/actions.js";

const Home = ({ fetchCharacters }) => {
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <div
      style={{
        backgroundImage: `url("https://i.pinimg.com/564x/e0/c7/47/e0c747a9d869f40f6d572a651791bdb5.jpg")`,
        width: "screen",
        height: "screen",
      }}
      className="h-[100vh] m-0 p-0"
    >
      <div className="mt-2 mb-2 w-full">
        <SearchBar />
      </div>
      <div className="w-full flex flex-row h-4/5">
        <div className="w-1/3 m-1 p-1 bg-slate-50 rounded-md">
          <Filters />
        </div>
        <div className="w-2/3 container mt-1">
          <Cards />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { fetchCharacters })(Home);
