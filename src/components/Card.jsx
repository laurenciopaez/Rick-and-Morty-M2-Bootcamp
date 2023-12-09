
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardCharacter = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) => {
   //now its a bootstrap card item
  return (
    <div >
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{status}</Card.Subtitle>
        <Card.Text>
          Species: {species}
          Gender: {gender}
          Origin: {origin}
        </Card.Text>
        <Button variant="primary" onClick={onClose}>Close</Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default CardCharacter;
