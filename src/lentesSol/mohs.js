
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import logoBebidas from '../imagenes/BEBIDAS/LOGOBEBIDAS.png'

/*IMAGENES*/ 
import cocacola350 from "../imagenes/BEBIDAS/COCACOLA350.jpg";
import pepsi350 from "../imagenes/BEBIDAS/PEPSI350CC.jpg"
import sevenup from '../imagenes/BEBIDAS/SEVEN350.jpg'
import cocacola125 from "../imagenes/BEBIDAS/COCACOLA1.25.jpg";
import pepsi125 from "../imagenes/BEBIDAS/pepsi-15-L.jpg";
import seven125 from "../imagenes/BEBIDAS/GASEOSA1-25.jpg";
import agua from "../imagenes/BEBIDAS/AGUAMINERAL500CC.jpg";
import aguaGas from "../imagenes/BEBIDAS/AGUAMINERALGAS500CC.jpg";
import aguaSav from "../imagenes/BEBIDAS/AGUASABORIZADA1,5.png";
import aguaSav500 from "../imagenes/BEBIDAS/AGUASABORIZADA500CC.jpg";
import heineken from "../imagenes/BEBIDAS/HEINEKENLATA473CC.jpg";
import isenbeck from "../imagenes/BEBIDAS/ISENBECKLATA473CC.jpg";



const Bebidas = () => {
  return (
    <div>
      <div class="div-cafe">
        <img class="img-cafe" src={logoBebidas} />
      </div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row bsPrefix="lista-cafe">
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                GASEOSAS 350cc
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                GASEOSAS 1,25 L
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                AGUA
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                AGUA SAVORIZADA 1.5 L
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
              AGUA SAVORIZADA 500 CC
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                HEINEKEN
              </ListGroup.Item>
              <ListGroup.Item action href="#link7">
                ISENBECK
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card border="dark">
                    <Card.Img variant="top" src={cocacola350} />
                    <Card.Body>
                      <Card.Title>COCA COLA</Card.Title>
                      <Card.Text>$450</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card border="dark">
                    <Card.Img variant="top" src={sevenup} />
                    <Card.Body>
                      <Card.Title>SEVEN UP</Card.Title>
                      <Card.Text>$450</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card border="dark">
                    <Card.Img variant="top" src={pepsi350} />
                    <Card.Body>
                      <Card.Title>PEPSI</Card.Title>
                      <Card.Text>$450</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>

              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card border="dark">
                    <Card.Img variant="top" src={cocacola125} />
                    <Card.Body>
                      <Card.Title>COCA COLA</Card.Title>
                      <Card.Text>$950</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card border="dark">
                    <Card.Img variant="top" src={seven125} />
                    <Card.Body>
                      <Card.Title>SEVEN UP</Card.Title>
                      <Card.Text>$950</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card border="dark">
                    <Card.Img variant="top" src={pepsi125} />
                    <Card.Body>
                      <Card.Title>PEPSI</Card.Title>
                      <Card.Text>$950</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>

              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={agua} />
                    <Card.Body>
                      <Card.Title>AGUA MINERAL</Card.Title>
                      <Card.Text>$450</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src={aguaGas} />
                    <Card.Body>
                      <Card.Title>AGUA MINERAL CON GAS</Card.Title>
                      <Card.Text>$450</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card >
                    <Card.Img variant="top" src={aguaSav} />
                    <Card.Body>
                      <Card.Title>AGUA SABORIZADA</Card.Title>
                      <Card.Text>$950</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={aguaSav500} />
                    <Card.Body>
                      <Card.Title>AGUA SABORIZADA</Card.Title>
                      <Card.Text>$450</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link6">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={heineken} />
                    <Card.Body>
                      <Card.Title>HEINEKEN LATA 473 CC</Card.Title>
                      <Card.Text>$950</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link7">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={isenbeck} />
                    <Card.Body>
                      <Card.Title>ISENBECK LATA 473 CC</Card.Title>
                      <Card.Text>$700</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
};

export default Bebidas;
