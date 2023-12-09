import { Link } from 'react-router-dom';
import React from 'react';

 
class SearchBar extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
         searchInput: '',
      };
   }

   handleSubmit = (event) => {
      event.preventDefault(); 
      this.props.onSearch(this.state.searchInput); 
      this.setState({ searchInput: '' }); 
    };

  handleInput = (event) => { //esto recarga la pagina cada vez que escribimos, nada mas
    this.setState({ searchInput: event.target.value }); 
    console.log('hola '+this.state.searchInput) // control
  };

   render() {
      return (
         <>
         <div >
            <div >
               <button >
                  <Link to='/about' >About</Link>
               </button>
            </div>
         </div>
         <div>
            <form onSubmit={this.handleSubmit}>
            <input 
               type='search' 
               
               value={this.state.searchInput}
               onChange={this.handleInput}
            /> 
            <button type='submit' c>Agregar</button> 
            </form>
         </div>
         <div >
            <div >
               <button>
                  <Link to='/comentarios'>Comentarios</Link>
               </button>
            </div>
         </div>
         </>
      );
   }
}; 

export default SearchBar;