import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import { fetchReset } from "../redux/actions/actions";
import Form from 'react-bootstrap/Form';

const Filters = ({species,}) => {
  const dispatch = useDispatch();

  const handleReset = (event) => {
    event.preventDefault();

    dispatch(fetchReset());
  };

  useEffect( ()=> {
  }, [species])

  console.log(species)

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
                Search by Specie
            </h2>
          <Form.Select className="w-1/3 border-2 border-black">
          <option value="1">None</option>
          {species.map((element, key) => (
              <option key={key} value={key}>
                {element}
              </option>
            ))}
             
            
          </Form.Select>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  species: state.species,
});

export default connect(mapStateToProps, { fetchReset })(Filters);
