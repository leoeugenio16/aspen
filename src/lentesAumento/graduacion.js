import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import kodak from '../imagenes/TIPO_DE_LENTES/marco_kodak.png';
import lentes_contacto from '../imagenes/TIPO_DE_LENTES/LENTES_DE_CONTACTO.png';
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
                    <Card.Img variant="top" src={kodak} />
                    <Card.Body>
                        <Card.Title>LENTES DE MARCOS</Card.Title>
                        <Card.Text>
                            <b>
                                EN ESTE SECTOR ENCONTRARAS UNA GRAN VARIEDAD DE MARCOS PARA LENTES DE GRADUACIÓN
                            </b>

                        </Card.Text>
                        <Button variant="primary" onClick={()=>navegacion('/rayband')}>
                            VER
                        </Button>
                    </Card.Body>
                </Card>
                <Card border='Dark' bsPrefix="card" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={lentes_contacto} />
                    <Card.Body>
                        <Card.Title>LENTES DE CONTACTO</Card.Title>
                        <Card.Text>
                            <b>
                                EN ESTE SECTOR ENCONTRARAS UNA GRAN VARIEDAD DE LENTES DE CONTACTO
                            </b>

                        </Card.Text>
                        <Button variant="primary" onClick={()=>navegacion('/rayband')}>
                            VER
                        </Button>
                    </Card.Body>
                </Card>
                
            </Row>
        </CardGroup>

    )
}
export default Carta;