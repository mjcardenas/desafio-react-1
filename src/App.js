import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

//importando el Header
import Header from './Header';
import CardImagen from './CardImagen';
import {Container, Col, Row} from 'react-bootstrap';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header titulo="Galería de Imágenes con React"></Header>
      <Container>
      <Row>
        <Col>
        <CardImagen imagen="https://cdn.pixabay.com/photo/2022/12/19/06/31/australian-shepherd-7664795_960_720.jpg" titulo="Perro" descripcion="Foto de perro"></CardImagen>
        </Col>
        <Col>
        <CardImagen imagen="https://cdn.pixabay.com/photo/2022/12/31/14/32/cat-7688749_960_720.jpg" titulo="Gato" descripcion="Foto de gato"></CardImagen>
        </Col>
        <Col>
        <CardImagen imagen="https://cdn.pixabay.com/photo/2022/12/14/12/29/nature-7655327_960_720.jpg" titulo="Pájaro" descripcion="Foto de pájaro"></CardImagen>
        </Col>
      </Row>
      </Container>
      <Footer texto="Todos los derechos reservados @2022"></Footer>
    </div>
  );
}

export default App;
