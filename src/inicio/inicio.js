import Figure from 'react-bootstrap/Figure';
import fachada from '../imagenes/INICIO/FACHADA.jpeg'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../imagenes/LOGO/logo nuevo.png'
const Inicio = () => {
    return (
        <div class="inicio">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={fachada} />
                <Card.Body>
                    <Card.Title>ASPEN CAFETERIA</Card.Title>
                    <Card.Text>
                        SOMOS UN LUGAR DESTINADO A PASARLA BIEN
                    </Card.Text>
                    <img class="inicio-img" src={logo}/>
                </Card.Body>
            </Card>

        </div>

    )
}

export default Inicio;