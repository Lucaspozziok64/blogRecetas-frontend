import { Card, CardText, Col, Container, Row } from "react-bootstrap";

const DetalleReceta = () => {

  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/8804990/pexels-photo-8804990.jpeg"
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font">Nombre Receta</Card.Title>
              <hr />
              <Card.Text>
                Descripcion receta
                <br />
                <br />
                <span className="primary-font fw-semibold ">
                  Categoria:
                </span>{" "}
                
                <br className="mb-3" />
              </Card.Text>
              <Card.Text>
                <strong>Pasos de la receta (incluyendo ingredientes):</strong>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleReceta;
