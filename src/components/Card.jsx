import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLikedCharacters,
  fetchUnlikedCharacters,
} from "../redux/actions/actions";

const CardCharacter = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  index,
}) => {
  //now its a bootstrap card item
  const dispatch = useDispatch();

  const character = useSelector((state) => state.characters.characters);
  const liked = useSelector( (state) => state.characters.liked_characters)
 
 


  const [isCardOpen, setIsCardOpen] = useState(true);

  const [isLiked, setIsLiked] = useState(false);

  const [isHovered, setIsHovered] = useState(false);


  const handleCardClose = () => {
    setIsCardOpen(false);
    onClose();
  };

  const handleLikeClick = () => {
    if (isLiked) {
      dispatch(fetchUnlikedCharacters(id));
    } else {
      dispatch(fetchLikedCharacters(character[index]));
    }
    setIsLiked(!isLiked);
  };

  useEffect( () => {
    liked.forEach((element) => {
      if (name === element.name) {
        setIsLiked(true);
      }
    })
    } , [])

  const statusColorClass = status === "Alive" ? "bg-green-500" : "bg-red-500";

  return (
    <Card
      className="w-[90%] h-[100%] relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? "scale(1.015)" : "scale(1)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <div className="absolute top-0 right-0">
        <div className="absolute top-2 right-2">
          <Button variant="link" onClick={handleLikeClick}>
            {isLiked ? (
              <i className="bi bi-heart-fill text-2xl text-red-500 "></i>
            ) : (
              <i className="bi bi-heart-fill text-2xl text-white  "> </i>
            )}
          </Button>
        </div>
      </div>
      <Card.Img variant="top" src={image} className="h-[45%]" />
      <Card.Body className="relative">
        <Card.Title className="text-2xl">{name}</Card.Title>
        <Card.Subtitle
          className={`mb-2 text-white rounded-md p-1 text-center w-1/2 m-auto ${statusColorClass}`}
        >
          {status}
        </Card.Subtitle>
        <Card.Text className="mt-1 mb-1 text-sm ">
          Species: {species} <br />
          Gender: {gender} <br />
          Origin: {origin}
        </Card.Text>

        <Button
          variant="primary"
          onClick={handleCardClose}
          className="bg-blue-500 absolute bottom-1 right-1"
        >
          Close
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardCharacter;
