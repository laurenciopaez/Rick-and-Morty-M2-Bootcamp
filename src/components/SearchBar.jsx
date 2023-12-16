import React, { useState } from "react";
import { Button, Form, Container, Navbar, Nav } from "react-bootstrap";
import { fetchSearchByIdAction } from "../redux/actions/actions";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState("");

  const handleInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(fetchSearchByIdAction(parseInt(searchInput)));

    setSearchInput(""); // Limpiar el input después de la búsqueda
  };
  return (
    <Navbar
      bg="light"
      expand="md"
      className=" w-4/5 rounded-lg items-center justify-between m-auto"
      style={{
        backgroundImage: 'url("https://www.xtrafondos.com/thumbs/1_9386.jpg")',
      }}
    >
      <Container fluid>
        <Navbar.Brand href="/about" className="text-white lg:text-xl md:text-lg sm:text-md bg-blue-500 rounded-md font-sans p-1">
          About
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Form inline className="flex flex-row ">
            <Form.Control
              type="search"
              value={searchInput}
              onChange={handleInput}
              className="rounded-md mr-2 p-1 mt-1 mb-1 border-black text-black border-1 bg-white"
              placeholder="Search by id"
            />
            <Button onClick={handleSubmit} className="bg-blue-500 mt-1 mb-1">
              Search
            </Button>
          </Form>
          <Nav className="ml-auto">
            <Nav.Link href="/favs" className="text-white lg:text-xl md:text-lg sm:text-md bg-blue-500 rounded-md font-sans w-1/5 text-center md:w-full lg:w-full">
              Your favs
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SearchBar;
