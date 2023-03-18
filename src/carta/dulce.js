
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import cafeChico from "../imagenes/CAFE/CAFE-CHICO.jpg";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import cafeGrande from "../imagenes/CAFE/CAFE-GRANDE.jpg";
import cortadoGrande from "../imagenes/CAFE/CORTADO-GRANDE.jpg";
import cortadoChico from "../imagenes/CAFE/CORTADO-CHICO.jpg";
import lagrimaChico from "../imagenes/CAFE/LAGRIMA-CHICO.jpg";
import lagrimaGrande from "../imagenes/CAFE/LAGRIMA-GRANDE.jpg";
import Mocaccino from "../imagenes/CAFE/MOCACCINO.jpg";
import Capuccino from "../imagenes/CAFE/CAPUCCINO.jpeg";
import Submarino from "../imagenes/CAFE/SUBMARINO.jpg";
import Te from "../imagenes/CAFE/TE.jpg";
import dulce from '../imagenes/DULCE/DULCE.png'

const Dulce = () => {
  return (
    <div>
      <div class="div-cafe">
        <img class="img-cafe" src={dulce} />
      </div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row bsPrefix="lista-cafe">
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                CAFE
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                CORTADO
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                LAGRIMA
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                MOCACCINO
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                CAPUCCINO
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                SUBMARINO
              </ListGroup.Item>
              <ListGroup.Item action href="#link7">
                TE
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={cafeChico} />
                    <Card.Body>
                      <Card.Title>CAFE CHICO</Card.Title>
                      <Card.Text>$500</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src={cafeGrande} />
                    <Card.Body>
                      <Card.Title>CAFE GRANDE</Card.Title>
                      <Card.Text>$550</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={cortadoChico} />
                    <Card.Body>
                      <Card.Title>CORTADO CHICO</Card.Title>
                      <Card.Text>$500</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src={cortadoGrande} />
                    <Card.Body>
                      <Card.Title>CORTADO GRANDE</Card.Title>
                      <Card.Text>$550</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={lagrimaChico} />
                    <Card.Body>
                      <Card.Title>LAGRIMA CHICO</Card.Title>
                      <Card.Text>$500</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src={lagrimaGrande} />
                    <Card.Body>
                      <Card.Title>LAGRIMA GRANDE</Card.Title>
                      <Card.Text>$550</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={Mocaccino} />
                    <Card.Body>
                      <Card.Title>MOCACCINO</Card.Title>
                      <Card.Text>$850</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={Capuccino} />
                    <Card.Body>
                      <Card.Title>CAPUCCINO</Card.Title>
                      <Card.Text>$750</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link6">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={Submarino} />
                    <Card.Body>
                      <Card.Title>SUBMARINO</Card.Title>
                      <Card.Text>$850</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link7">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={Te} />
                    <Card.Body>
                      <Card.Title>TE</Card.Title>
                      <Card.Text>$450</Card.Text>
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

export default Dulce;
