import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Cards from "./Cards.jsx";
import SearchBar from "./SearchBar.jsx";
import Filters from "./Filters.jsx";
import { fetchCharactersAction, getSpeciesAction } from "../redux/actions/actions.js";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(fetchCharactersAction());
      dispatch(getSpeciesAction());
    };

    fetchData();
  }, [dispatch]);

  return (
    <div
      style={{
        backgroundImage: `url("https://i.pinimg.com/564x/e0/c7/47/e0c747a9d869f40f6d572a651791bdb5.jpg")`,
        width: "screen",
        height: "100vh",
      }}
      className="h-auto m-0 p-0 flex flex-col min-h-screen"
    >
      <div className="mt-2 mb-2 w-full">
        <SearchBar />
      </div>
      <div className="w-full flex lg:flex-row md:flex-row flex-col h-full">
        <div className="md:w-1/3 w-full m-1 p-1 bg-slate-50 rounded-md h-1/3">
          <Filters />
        </div>
        <div className="md:w-2/3 w-full container md:mt-1 h-auto sm:mt-4 lg:mt-1 xl:mt-1">
          <Cards />
        </div>
      </div>
    </div>
  );
};

export default Home;
