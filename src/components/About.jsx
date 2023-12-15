import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex flex-row w-2/5 h-auto justify-center items-center m-auto pt-2">
        <Button className="bg-blue-500 mb-2 mt-2">
          <Link to="/">Home</Link>
        </Button>

        <div>
          <h1 className="lg:text-3xl font-semibold ml-10 sm:text-sm md:text-lg ">
            Welcome to About Page
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
        <div className="w-5/6 bg-slate-50 rounded-md h-5/6 m-auto overflow-auto">
          <h2 className="font-semibold text-black lg:text-xl m-2 md:text-lg sm:text-sm">
            Utilized Technologies
          </h2>
          <p className="text-black lg:text-lg font-medium m-2 md:text-base sm:text-sm">
            This project utilizes the Rick and Morty API to create an
            interactive web application that allows users to explore and obtain
            information about characters from the animated series "Rick and
            Morty." The application offers various functionalities to enhance
            the user experience, including:
          </p>
          <ul className="text-black lg:text-lg text-justify m-3 md:text-base sm:text-sm">
            <li>
              <strong>@reduxjs/toolkit (v2.0.1):</strong> Toolkit for efficient
              Redux development.
            </li>
            <li>
              <strong>autoprefixer (v10.4.16):</strong> PostCSS plugin for
              adding vendor prefixes.
            </li>
            <li>
              <strong>axios (v1.6.2):</strong> Promise-based HTTP client for
              making requests.
            </li>
            <li>
              <strong>bootstrap (v5.3.2):</strong> Front-end framework for
              design and styling.
            </li>
            <li>
              <strong>bootstrap-icons (v1.11.2):</strong> Icons for Bootstrap.
            </li>
            <li>
              <strong>react (v18.2.0):</strong> JavaScript library for building
              user interfaces.
            </li>
            <li>
              <strong>react-bootstrap (v2.9.1):</strong> Bootstrap components
              for React.
            </li>
            <li>
              <strong>react-dom (v18.2.0):</strong> React package for working
              with the DOM.
            </li>
            <li>
              <strong>react-redux (v9.0.4):</strong> React bindings for Redux
              state management.
            </li>
            <li>
              <strong>react-router-dom (v6.3.0):</strong> DOM bindings for React
              Router.
            </li>
            <li>
              <strong>react-scripts (v5.0.1):</strong> Scripts and
              configurations for Create React App.
            </li>
            <li>
              <strong>react-transition-group (v4.4.5):</strong> Animations for
              React components.
            </li>
            <li>
              <strong>redux-persist (v6.0.0):</strong> Persist and rehydrate a
              Redux store.
            </li>
            <li>
              <strong>redux-thunk (v3.1.0):</strong> Middleware for asynchronous
              actions in Redux.
            </li>
            <li>
              <strong>web-vitals (v2.1.4):</strong> Library for measuring web
              performance.
            </li>
          </ul>
          <a
            href="https://github.com/laurenciopaez/Rick-and-Morty-M2-Bootcamp"
            className="text-blue-500 lg:text-2xl font-semibold m-3 md:text-xl sm:text-base pb-3"
          >
            Repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
