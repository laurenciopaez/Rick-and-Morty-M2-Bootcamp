//this comp was a class component, now its a functional component.

import React, { useState, useEffect } from 'react';
import style from '../styles/div.module.css';
import CardCharacter from './Card';

const Cards = (props) => {
  const [characters, setCharacters] = useState(props.characters);

  useEffect(() => {
    if (props.characters !== characters) {
      setCharacters(props.characters);
    }
  }, [props.characters, characters]);

  const handleClick = (id) => {
    setCharacters((prevCharacters) =>
      prevCharacters.map((character) =>
        character.id === id ? { ...character, render: false } : character
      )
    );
    props.onCharacterDelete(id);
  };

  return (
    <div className={style.div}>
      {characters
        .filter((character) => character.render)
        .map(({ id, name, species, gender, image, origin, status }) => (
          <CardCharacter
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            origin={origin.name}
            status={status}
            onClose={() => handleClick(id)}
          />
        ))}
    </div>
  );
};

export default Cards;
