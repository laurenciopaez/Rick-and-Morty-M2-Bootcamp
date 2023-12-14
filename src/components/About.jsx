import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class About extends React.Component {
  render() {
    return (
      <div className="w-full h-screen">
        <div className="flex flex-row w-2/5 h-auto justify-center items-center m-auto pt-2">
          <Button className="bg-blue-500 mb-2 mt-2">
            <Link to="/">Home</Link>
          </Button>

          <div>
            <h1 className="text-3xl font-semibold ml-10 ">
              Welcome to About Page
            </h1>
          </div>
        </div>
        <div className="w-4/5 rounded-md h-4/5 m-auto mt-2 flex items-center" style={{
            backgroundImage: "url('https://wallpapers.com/images/hd/rick-and-morty-fighting-green-aliens-zp6odvm0462ff5c2.jpg'"
        }}>
          <div className="w-5/6 bg-slate-50 rounded-md h-5/6 m-auto">
            <h2 className="font-semibold text-black text-xl m-2">
              Utilized Technologies
            </h2>
            <p className="text-black text-lg font-medium m-2">
              This project utilizes the Rick and Morty API to create an
              interactive web application that allows users to explore and
              obtain information about characters from the animated series "Rick
              and Morty." The application offers various functionalities to
              enhance the user experience, including:
            </p>
            <ul className="text-black text-lg text-justify m-3">
              <li>
                <strong>React (v18.2.0):</strong> JavaScript library for
                building interactive and reactive user interfaces.
              </li>
              <li>
                <strong>React Router Dom (v6.3.0):</strong> Router for managing
                routes in a React application.
              </li>
              <li>
                <strong>Redux and React-Redux (v9.0.2):</strong> Libraries for
                managing the global state of the application.
              </li>
              <li>
                <strong>Redux Thunk (v3.1.0):</strong> Middleware that allows
                performing asynchronous actions in Redux, especially useful for
                API requests.
              </li>
              <li>
                <strong>Axios (v1.6.2):</strong> Promise-based HTTP client for
                making requests to the Rick and Morty API.
              </li>
              <li>
                <strong>
                  Bootstrap (v5.3.2) and React-Bootstrap (v2.9.1):
                </strong>{" "}
                Framework and CSS component library for the design and styling
                of the application.
              </li>
              <li>
                <strong>Autoprefixer (v10.4.16):</strong> PostCSS plugin that
                automatically adds vendor prefixes to CSS.
              </li>
              <li>
                <strong>Web Vitals (v2.1.4):</strong> Library for measuring the
                performance of a web application.
              </li>
            </ul>
            <a href="https://github.com/laurenciopaez/Rick-and-Morty-M2-Bootcamp" className="text-blue-500 text-2xl font-semibold m-3">Repository</a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
