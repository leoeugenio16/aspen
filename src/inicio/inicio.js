import Figure from 'react-bootstrap/Figure';
import fachada from '../imagenes/INICIO/FACHADA.jpeg'
import Card from 'react-bootstrap/Card';
import logo from '../imagenes/LOGO/logooptica.png'
const Inicio = () => {
    return (
        <div class="inicio">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={fachada} />
                <Card.Body>
                    <Card.Title>OPTICA VISION</Card.Title>
                    <Card.Text>
                        LENTES DE SOL,CONTACTO Y GRADUACIÓN
                    </Card.Text>
                    <img class="inicio-img" src={logo}/>
                </Card.Body>
            </Card>

        </div>

    )
}

export default Inicio;