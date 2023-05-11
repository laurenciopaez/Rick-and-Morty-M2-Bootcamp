import Card from './Card';
import style from '../styles/div.module.css'
import React from 'react';

class Cards extends React.Component{ 
   constructor(props) {
      super(props);
      this.state = {
        characters: props.characters,
 
      };
    }
  
    componentDidUpdate(prevProps) {
      if (this.props.characters !== prevProps.characters) {
        this.setState({
          characters: this.props.characters,
        });
      }
    }

    handleClick = (id) => {
      this.setState((prevState) => ({
        characters: prevState.characters.map((character) =>
          character.id === id ? { ...character, render: false } : character
        ),
      }), 
      () => {
        this.props.onCharacterDelete(id);
      }
    );
  };
  
    render() {
      const { characters } = this.state;

      return (
        <div className={style.div}>
          {characters
            .filter((character) => character.render)
            .map(({ id, name, species, gender, image, origin, status }) => (
              <Card
                key={id}
                id={id}
                name={name}
                species={species}
                gender={gender}
                image={image}
                origin={origin.name}
                status={status}
                onClose={() => this.handleClick(id)}
              />
            ))}
        </div>
      );
    }
};

export default Cards;