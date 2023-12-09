import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Cards from './Cards.jsx';
import SearchBar from './SearchBar.jsx';
import { fetchCharacters } from '../redux/actions/actions.js';
import styles from '../styles/div.module.css';

const Home = ({ characters, fetchCharacters }) => {
  
  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  const handleSearch = () => {

  }

  const handleCharacterDelete = () => {

  }
      
      return (
        <div className={styles.fondo}>
          <div className={styles.nav}>
            <SearchBar onSearch={handleSearch} />
          </div>
          <Cards characters={characters} onCharacterDelete={handleCharacterDelete} />
        </div>
      );
    };
    
    const mapStateToProps = (state) => ({
      characters: state.characters,
    });
    
    export default connect(mapStateToProps, { fetchCharacters })(Home);