//this comp was a class component, now its a functional component.

import React, {useState, useEffect } from 'react';

import CardCharacter from './Card';

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
    <div className='d-grid grid grid-cols-4 gap-4'>
      {charactersToShow.map(({ id, name, species, gender, image, origin, status }) => (
        <CardCharacter
          key={id}
          id={id}
          name={name}
          species={species}
          gender={gender}
          image={image}
          origin={origin.name}
          status={status}
          // onClose={() => handleClick(id)}
        />
      ))}
      <div className="pagination">
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
    </div>
  );
};


export default Cards;
