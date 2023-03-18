import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Row from 'react-bootstrap/Row';
import Promo1 from "../imagenes/PROMOCIONES/PROMO14-03-2023.jpeg";

const Promociones = () => {
  return (
    <CardGroup>
      <Row className="g-4">
        <Card border="Dark" bsPrefix="card" style={{ width: "100%" }}>
          <Card.Img variant="top" src={Promo1} />
          <Card.Body>
            <Card.Title>CAFE + CAPCAKES</Card.Title>
            <Card.Text>
              <b>
                $800
              </b>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card border="Dark" bsPrefix="card" style={{ width: "100%" }}>
          <Card.Img variant="top" src={Promo1} />
          <Card.Body>
            <Card.Title>CAFE + CAPCAKES</Card.Title>
            <Card.Text>
              <b>
                $800
              </b>
            </Card.Text>
          </Card.Body>
        </Card>
        
      </Row>
    </CardGroup>
  );
};

export default Promociones;
