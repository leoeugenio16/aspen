import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cafe from '../imagenes/CARTA/cafe.jpeg';
import bebida from '../imagenes/CARTA/bebidas.jpg';
import merienda from '../imagenes/CARTA/merienda.jpeg'
import dulces from '../imagenes/CARTA/dulces.jpeg'
import { CardGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';

const Carta = () => {
    return (
        <CardGroup >
            <Row  className="g-4">
                <Card border='Dark' bsPrefix="card" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={cafe} />
                    <Card.Body>
                        <Card.Title>CAFETERIA</Card.Title>
                        <Card.Text>
                            <b>
                                EN ESTE SECTOR ENCONTRARAS UNA GRAN VARIEDAD DE CAFE EN LA VERSION CHICO Y GRANDE
                            </b>

                        </Card.Text>
                        <Button variant="primary" href='/cafeteria'>VER</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top"  src={bebida} />
                    <Card.Body>
                        <Card.Title>BEBIDAS</Card.Title>
                        <Card.Text>
                            <b>
                                EN ESTE SECTOR ENCONTRARAS UNA AMPLIA VARIEDAD DE BEBIDAS CON Y SIN ALCOHOL
                            </b>

                        </Card.Text>
                        <Button variant="primary" href='/bebidas'>VER</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={merienda} />
                    <Card.Body>
                        <Card.Title>DESAYUNOS Y MERIENDA</Card.Title>
                        <Card.Text >
                            <b>
                                EN ESTE SECTOR ENCONTRARAS VARIEDAD DE SANDGUCHES Y MEDIALUNAS PARA ACOMPAÑAR A TU CAFE
                            </b>

                        </Card.Text>
                        <Button variant="primary" href='/desayunoMerienda'>VER</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={dulces} />
                    <Card.Body>
                        <Card.Title>DULCES</Card.Title>
                        <Card.Text>
                            <b>
                                EN ESTE SECTOR ENCONTRAR UNA ENORME VARIEDAD DE TORTAS Y PÓSTRES PARA DELEITARTE
                            </b>

                        </Card.Text>
                        <Button variant="primary" href='/dulce'>VER</Button>
                    </Card.Body>
                </Card>
            </Row>
        </CardGroup>

    )
}
export default Carta;