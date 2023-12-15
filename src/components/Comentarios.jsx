import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import CardCharacter from "./Card";

const Favs = () => {
  const [isCardOpen, setIsCardOpen] = useState(true);
  const favChars = useSelector((state) => state.characters.liked_characters);
    console.log(favChars)
  const itemsPerPage = 20;

  const [currentPage, setCurrentPage] = useState(1);
  const [closedCards, setClosedCards] = useState([]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleCardClose = (id) => {
    setClosedCards([...closedCards, id]);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const charactersToShow = favChars
    .slice(startIndex, endIndex)
    .filter((character) => !closedCards.includes(character.id));



  return (
    <div className="w-full h-screen">
      <div className="flex flex-row w-2/5 h-auto justify-center items-center m-auto pt-2">
        <Button className="bg-blue-500 mb-2 mt-2">
          <Link to="/">Home</Link>
        </Button>

        <div>
          <h1 className="text-3xl font-semibold ml-10 ">
            Welcome to Favs Page
          </h1>
        </div>
      </div>
      <div
        className="w-4/5 rounded-md h-4/5 m-auto mt-2 flex items-center"
        style={{
          backgroundImage:
            "url('https://wallpapers.com/images/hd/rick-and-morty-fighting-green-aliens-zp6odvm0462ff5c2.jpg'",
        }}
      >
        <div className="w-5/6 bg-slate-50 rounded-md h-5/6 m-auto">
          <Row xs={1} md={4} className="g-4">
            <TransitionGroup component={null}>
              {favChars.map(
                (
                  { id, name, species, gender, image, origin, status },
                  index
                ) => (
                  <CSSTransition key={id} timeout={500} classNames="scale">
                    <Col key={id}>
                      <CardCharacter
                        index={index}
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
                <span className="text-black text-2xl font-semibold">
                  {currentPage}
                </span>
                <Button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={endIndex >= favChars.length}
                  className="bg-blue-500 mb-2 mt-2 ml-2 w-24"
                >
                  Next
                </Button>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Favs;
