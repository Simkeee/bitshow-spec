import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

function LandingCard({ show }) {
  const name = show.name;
  const image = show.image.medium;
  const rating = show.rating.average;

  const bodyStyle = rating >= 8.5 ? { backgroundColor: 'rgb(237, 227, 87)', padding: '5%'} : { padding: '5%' };

  return (
    <Card>
      <div className="position-relative">
        <Card.Img variant="top" src={image} />
      </div>
      <Card.Body style={bodyStyle}>
        <Badge className="position-absolute bottom-10 end-0 translate-middle-y rounded-circle">
          {rating}
        </Badge>
        <Card.Title style={{color: 'black',textDecoration: 'none'}}>{name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default LandingCard;

