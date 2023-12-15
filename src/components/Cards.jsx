//this comp was a class component, now its a functional component.

import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardCharacter from "./Card";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { TransitionGroup, CSSTransition } from 'react-transition-group';


const Cards = () => {
  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);
  const [closedCards, setClosedCards] = useState([]);

  const characters = useSelector((state) => state.characters.characters);

const liked = useSelector((state) => state.characters.liked_characters)
console.log(liked)

  useEffect(() => {}, [characters]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleCardClose = (id) => {
    setClosedCards([...closedCards, id]);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const charactersToShow = characters
    .slice(startIndex, endIndex)
    .filter((character) => !closedCards.includes(character.id));

  return (
    <Row xs={1} md={4} className="g-4">
      <TransitionGroup component={null}>
      {charactersToShow.map(
        ({ id, name, species, gender, image, origin, status }, index) => (
          <CSSTransition key={id} timeout={500} classNames="scale" > 
          <Col key={id}>
            <CardCharacter
              index = {index}
              id={id}
              name={name}
              species={species}
              gender={gender}
              image={image}
              origin={origin.name}
              status={status}
              onClose={() => handleCardClose(id)}
            />
          </Col>
          </CSSTransition>
        )
      )}
      </TransitionGroup>
      <div className="w-full justify-center flex">
        <div className="pr-2 pl-2 bg-slate-50 justify-center flex rounded-md items-center">
          <Button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-blue-500 mb-2 mt-2 mr-2 w-24"
          >
            Previous
          </Button>
          <span className="text-black text-2xl font-semibold">{currentPage}</span>
          <Button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={endIndex >= characters.length}
            className="bg-blue-500 mb-2 mt-2 ml-2 w-24"
          >
            Next
          </Button>
        </div>
      </div>
    </Row>
  );
};



export default Cards;
