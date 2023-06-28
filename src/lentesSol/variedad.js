import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import rayband from '../imagenes/TIPO_DE_LENTES/rayband.png';
import ozono from '../imagenes/TIPO_DE_LENTES/ozono.png';
import ruta66 from '../imagenes/TIPO_DE_LENTES/ruta66.png'
import mohs from '../imagenes/TIPO_DE_LENTES/mohs.jpg'
import { CardGroup } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';

const Carta = () => {

    const navegacion=useNavigate();
    return (
        <CardGroup >
            <Row className="g-4">
                <Card border='Dark' bsPrefix="card" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={rayband} />
                    <Card.Body>
                        <Card.Title>RAY-BAND</Card.Title>
                        <Card.Text>
                            <b>
                                EN ESTE SECTOR ENCONTRARAS UNA GRAN VARIEDAD DE LENTES RAY-BAND
                            </b>

                        </Card.Text>
                        <Button variant="primary" onClick={()=>navegacion('/rayband')}>
                            VER
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={ozono} />
                    <Card.Body>
                        <Card.Title>OZONO</Card.Title>
                        <Card.Text>
                            <b>
                                EN ESTE SECTOR ENCONTRARAS UNA AMPLIA VARIEDAD DE LENTES OZONO
                            </b>

                        </Card.Text>
                        <Button variant="primary" onClick={()=>navegacion('/ozono')}>VER</Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={ruta66} />
                    <Card.Body>
                        <Card.Title>RUTA 66</Card.Title>
                        <Card.Text >
                            <b>
                                EN ESTE SECTOR ENCONTRARAS VARIEDAD DE LENTES RUTA 66
                            </b>

                        </Card.Text>
                        <Button onClick={()=>navegacion('/ruta66')} variant="primary" >
                            VER
                        </Button>
                    </Card.Body>
                </Card>
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={mohs} />
                    <Card.Body>
                        <Card.Title>MOHS</Card.Title>
                        <Card.Text>
                            <b>
                                EN ESTE SECTOR ENCONTRAR UNA ENORME VARIEDAD DE LENTES MOHS
                            </b>

                        </Card.Text>
                        <Button onClick={()=>navegacion('/dulce')}variant="primary" >
                            VER
                        </Button>
                    </Card.Body>
                </Card>
            </Row>
        </CardGroup>

    )
}
export default Carta;