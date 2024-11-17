import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { discoutProducts} from '../AllData';


function BigDiscounts() {
  return (
    <Row xs={1} md={3} className="g-5">
      {Array.from({ length: 6 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Img variant="top" src="\Images\double-sofa-01.png" />
            <Card.Body>
              <Card.Title>{discoutProducts[0].productName}</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        
      ))}
    </Row>
  );
}

export default BigDiscounts;