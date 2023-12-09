//this comp was a class component, now its a functional component.

import React, { useEffect } from 'react';
import style from '../styles/div.module.css';
import CardCharacter from './Card';

const Cards = ({characters}) => {

  useEffect(() => {
  }, [characters]);

  console.log(characters)

  return (
    <div className={style.div}>
      {characters
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
           //onClose={() => handleClick(id)}
          />
        ))}
    </div>
  );
};

export default Cards;
