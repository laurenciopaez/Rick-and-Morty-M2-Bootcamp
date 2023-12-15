import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Comentarios = () => {

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
    <div className="w-4/5 rounded-md h-4/5 m-auto mt-2 flex items-center" style={{
        backgroundImage: "url('https://wallpapers.com/images/hd/rick-and-morty-fighting-green-aliens-zp6odvm0462ff5c2.jpg'"
    }}>
      <div className="w-5/6 bg-slate-50 rounded-md h-5/6 m-auto">
    </div>
    </div>
  </div>
);
}


export default Comentarios;
