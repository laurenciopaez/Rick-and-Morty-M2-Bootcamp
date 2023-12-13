//this comp was a class component, now its a functional component.

import React, {useState, useEffect } from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardCharacter from './Card';
import { connect } from 'react-redux';

const Cards = ({characters}) => {

  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
  }, [characters]);


  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const charactersToShow = characters.slice(startIndex, endIndex);

  return (
    <Row xs={1} md={4} className='g-4'>
      {charactersToShow.map(({ id, name, species, gender, image, origin, status }) => (
        <Col key={id}>
          <CardCharacter
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            origin={origin.name}
            status={status}
            // onClose={() => handleClick(id)}
          />
        </Col>
      ))}
      <div className='pagination'>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span>{currentPage}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={endIndex >= characters.length}
        >
          Siguiente
        </button>
      </div>
    </Row>
  );
};

const mapStateToProps = (state) => ({
  characters: state.characters,
})


export default connect(mapStateToProps, {})(Cards);
