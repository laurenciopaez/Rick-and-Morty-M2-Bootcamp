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

  const statusColorClass = status === "Alive" ? "bg-green-500" : "bg-red-500";

  return (
    <Card className="w-[90%] h-[100%]" >
      <Card.Img variant="top" src={image} className="h-[45%]" />
      <Card.Body className="relative">
        <Card.Title className="text-2xl">{name}</Card.Title>
        <Card.Subtitle className={`mb-2 text-white rounded-md p-1 text-center w-1/2 m-auto ${statusColorClass}`}>{status}</Card.Subtitle>
        <Card.Text className="mt-1 mb-1 text-sm ">
          Species: {species} <br/>
          Gender: {gender} <br/>
          Origin: {origin}
        </Card.Text>

        <Button variant="primary" onClick={onClose} className="bg-blue-500 absolute bottom-1 right-1">
          Close
        </Button>

       
      </Card.Body>
    </Card>
  );
};

export default CardCharacter;
