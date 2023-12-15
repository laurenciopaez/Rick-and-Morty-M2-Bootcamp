import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFilterByGenreAction,
  fetchFilterBySpeciesAction,
  fetchFilterByStateAction,
  fetchResetAction,
} from "../redux/actions/actions";
import Form from "react-bootstrap/Form";

const Filters = () => {
  const dispatch = useDispatch();
  const species = useSelector((state) => state.characters.species);
  const handleReset = (event) => {
    event.preventDefault();

    Reset();
  };

  const handleGenderSelect = (event) => {
    event.preventDefault();
    if (event.target.value !== "none") {
      dispatch(fetchFilterByGenreAction(event.target.value));
    } else {
      Reset();
    }
  };

  const handleStatusSelect = (event) => {
    event.preventDefault();
    if (event.target.value !== "none") {
      dispatch(fetchFilterByStateAction(event.target.value));
    } else {
      Reset();
    }
  };

  const handleSpecieSelect = (event) => {
    event.preventDefault();
    if (event.target.value !== "none") {
      dispatch(fetchFilterBySpeciesAction(event.target.value));
    } else {
      Reset();
    }
  };

  const Reset = () => {
    document.getElementById("specieSelect").value = "none";
    document.getElementById("genderSelect").value = "none";
    document.getElementById("statusSelect").value = "none";

    dispatch(fetchResetAction());
  };

  useEffect(() => {}, [species]);

  return (
    <>
      <div>
        <h1 className="text-2xl font-semibold text-black w-full text-center border-b-2 mb-1">
          Filters
        </h1>
        <div className="w-full flex justify-between items-center pl-1 pr-1 border-b-2 mb-1">
          <h2 className="text-lg font-semibold text-black w-1/3">
            Reset all the filters:
          </h2>
          <Button className="bg-blue-500 mb-2 mt-2" onClick={handleReset}>
            Reset
          </Button>
        </div>
        <div className="w-full flex justify-between items-center pl-1 pr-1 border-b-2 mb-1">
          <h2 className="text-lg font-semibold text-black w-1/3">
            Search by Specie:
          </h2>
          <Form.Select
            className="w-1/3 border-2 border-black"
            id="specieSelect"
            onChange={handleSpecieSelect}
          >
            <option value="none">None</option>
            {species.map((element, key) => (
              <option key={key} value={element}>
                {element}
              </option>
            ))}
          </Form.Select>
        </div>
        <div className="w-full flex justify-between items-center pl-1 pr-1 border-b-2 mb-1">
          <h2 className="text-lg font-semibold text-black w-1/3">
            Search by Gender:
          </h2>
          <Form.Select
            className="w-1/3 border-2 border-black"
            id="genderSelect"
            onChange={handleGenderSelect}
          >
            <option value="none">None</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unkown">unkown</option>
          </Form.Select>
        </div>
        <div className="w-full flex justify-between items-center pl-1 pr-1 border-b-2 mb-1">
          <h2 className="text-lg font-semibold text-black w-1/3">
            Search by Status:
          </h2>
          <Form.Select
            className="w-1/3 border-2 border-black"
            id="statusSelect"
            onChange={handleStatusSelect}
          >
            <option value="none">None</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unkown">unkown</option>
          </Form.Select>
        </div>
      </div>
    </>
  );
};

export default Filters;
