import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Comentarios from './components/Comentarios';

class App extends React.Component {    
   render(){
   return (
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>}/>
        <Route path='/comentarios' element={<Comentarios/>}/>
      </Routes>
    )
  }
}

export default App;
