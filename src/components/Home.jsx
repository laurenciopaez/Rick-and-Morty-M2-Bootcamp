import Cards from './Cards.jsx';
import characters from '../data.js';
import styles from '../styles/div.module.css';
import SearchBar from './SearchBar.jsx';
import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
           characters: characters,
           OrigCharacters: characters
        }
     }
     
     handleSearch = (data) => {
        const characters = this.state.characters;
        const prueba1 = this.state.OrigCharacters;
        console.log('debajo de esto')
        console.log(prueba1)  //funciona
  
        const existingCharacter = characters.find( //me esta guardando el character que pedi
          (character) => character.id === parseInt(data)
        );
  
        console.log(existingCharacter)
    
        if (existingCharacter) {
          this.setState({
            characters: this.state.characters.map((character) =>
              character.id === parseInt(data) ? { ...character, render: true } : character
            ),
          });
        }
      };
  
      handleCharacterDelete = (id) => {
        this.setState((prevState) => ({
          characters: prevState.characters.map((character) =>
            character.id === id ? { ...character, render: false } : character
          ),
        }));
      };
      
     render(){
        const characters = this.state.characters
     return (
        
        <div className={styles.fondo}>
           <div className={styles.nav}>
              <SearchBar onSearch={this.handleSearch}/>
            </div>
              <Cards characters={characters} onCharacterDelete={this.handleCharacterDelete}/>
            </div>
     );
  }
}

export default Home;