import { Link } from 'react-router-dom';
import styles from '../styles/button.module.css';
import style from '../styles/div.module.css';
import inpute from '../styles/input.module.css';
import React from 'react';
import Font from '../styles/font.module.css'
 
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
         <div className={style.nav_container}>
            <div className={style.divContainer}>
               <button className={styles.button_85}>
                  <Link to='/about' className={Font.estilo_link}>About</Link>
               </button>
            </div>
         </div>
         <div className={style.nav_container}>
            <form onSubmit={this.handleSubmit}>
            <input 
               type='search' 
               className={inpute.input}
               value={this.state.searchInput}
               onChange={this.handleInput}
            /> 
            <button type='submit' className={styles.button_85}>Agregar</button> 
            </form>
         </div>
         <div className={style.nav_container}>
            <div className={style.divContainer}>
               <button className={styles.button_85}>
                  <Link to='/comentarios' className={Font.estilo_link}>Comentarios</Link>
               </button>
            </div>
         </div>
         </>
      );
   }
}; 

export default SearchBar;