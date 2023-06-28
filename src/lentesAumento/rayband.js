import RAYBAND from "../imagenes/TIPO_DE_LENTES/raybandlogo.png";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import juliebronce from "../imagenes/TIPO_DE_LENTES/julie bronce.png";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import julienegro from "../imagenes/TIPO_DE_LENTES/julie negro.png";
import RB3183negro from "../imagenes/TIPO_DE_LENTES/RB3183 negros.png";
import RB3183 from "../imagenes/TIPO_DE_LENTES/RB3183 gris.png"
import ERIKA_COLOR_MIX_NEGRO from "../imagenes/TIPO_DE_LENTES/ERIKA COLOR MIX NEGRO.png";
import ERIKA_COLOR_MIX_MARRON from "../imagenes/TIPO_DE_LENTES/ERIKA COLOR MIX MARRON.png";
import JUSTIN_CLASSIC_NEGRO from "../imagenes/TIPO_DE_LENTES/JUSTIN CLASSIC NEGRO.png";
import AVIATOR_MIRROR_DORADO from "../imagenes/TIPO_DE_LENTES/AVIATOR MIRROR DORADO.png";
import NEW_WAYFARER from "../imagenes/TIPO_DE_LENTES/NEW WAYFARER.png";
import ROUND_FLECK from "../imagenes/TIPO_DE_LENTES/ROUND FLECK.png";

const Cafe = () => {
  return (
    <div>
      <div class="div-cafe">
        <img class="img-cafe" src={RAYBAND} />
      </div>
      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row bsPrefix="lista-cafe">
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                JULIE
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                RB3183
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                ERIKA COLOR MIX
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                JUSTIN CLASSIC
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                AVIATOR MIRROR
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                NEW WAYFARER
              </ListGroup.Item>
              <ListGroup.Item action href="#link7">
                ROUND FLECK
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={juliebronce} />
                    <Card.Body>
                      <Card.Title>BRONCE</Card.Title>
                      <Card.Text>Anteojos De Sol Ray Ban Julie Bronce Y Cobre Rb3957 T.49m</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src={julienegro} />
                    <Card.Body>
                      <Card.Title>NEGRO</Card.Title>
                      <Card.Text>Anteojos De Sol Ray Ban Julie Negro Rb3957 T.49</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={RB3183} />
                    <Card.Body>
                      <Card.Title>GRIS</Card.Title>
                      <Card.Text>Anteojos de sol polarizados Ray-Ban RB3183 Standard con marco de metal color polished gunmetal, lente silver espejada, varilla polished gunmetal de metal</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src={RB3183negro} />
                    <Card.Body>
                      <Card.Title>NEGRO</Card.Title>
                      <Card.Text>Anteojos de sol polarizados Ray-Ban RB3183 Standard con marco de metal color negro, lente silver espejada, varilla polished gunmetal de metal</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={ERIKA_COLOR_MIX_NEGRO} />
                    <Card.Body>
                      <Card.Title>NEGRO MATE</Card.Title>
                      <Card.Text>Ray-Ban Erika Color Mix RB4171 - Grey - Degradada - Matte rubber black - Nailon - Black - Metal - Standard (Incluye: Con lente polarizada)</Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src={ERIKA_COLOR_MIX_MARRON} />
                    <Card.Body>
                      <Card.Title>MARRON</Card.Title>
                      <Card.Text>Anteojos de sol polarizados Ray-Ban Erika Classic Standard con marco de nailon color polished tortoise, lente brown de policarbonato degradada, varilla gunmetal de metal - RB4171</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={JUSTIN_CLASSIC_NEGRO} />
                    <Card.Body>
                      <Card.Title>NEGRO MATE</Card.Title>
                      <Card.Text>Anteojos de sol polarizados Ray-Ban Justin Classic Standard con marco de nailon color matte black, lente grey de policarbonato degradada, varilla matte black de nailon - RB4165</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={AVIATOR_MIRROR_DORADO} />
                    <Card.Body>
                      <Card.Title>DORADO</Card.Title>
                      <Card.Text>Lentes De Sol Rayban Aviador Chromance Polarizado Rb3025 T58</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link6">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={NEW_WAYFARER} />
                    <Card.Body>
                      <Card.Title>CLASICO</Card.Title>
                      <Card.Text>Ray-Ban New Wayfarer Classic RB2132 - Green - Cristal - Clásica - Polished black - Nailon - Polished black - Nailon - Extra large (Incluye: Con lente polarizada)</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Tab.Pane>
              <Tab.Pane eventKey="#link7">
                <CardGroup bsPrefix="cafeChicoYgrande">
                  <Card>
                    <Card.Img variant="top" src={ROUND_FLECK} />
                    <Card.Body>
                      <Card.Title>CLASICO</Card.Title>
                      <Card.Text>Lentes De Sol Rb2447 Round Fleck 1160 - Talle M Estándar</Card.Text>
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

export default Cafe;
