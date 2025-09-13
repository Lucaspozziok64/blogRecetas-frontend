import { Card, CardText, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { obtenerRecetasPorId } from "../../helpers/queries";
import { useEffect, useState } from "react";

const DetalleReceta = ({ receta }) => {
  const { id } = useParams();
  const [listaRecetas, setListaRecetas] = useState({});

  useEffect(() => {
    obtenterRecetas();
  }, []);

  const obtenterRecetas = async () => {
    const respuesta = await obtenerRecetasPorId(id);
    if(respuesta.status === 200) {
      const recetaBuscada = await respuesta.json();
      setListaRecetas(recetaBuscada)
      console.log(recetaBuscada);
      console.log(id);
    }
  };

  return (
    <Container className="my-3 mainSection">
      <Card>
        <Row>
          <Col md={6}>
            <Card.Img
              variant="top"
              src={listaRecetas.imagen}
              alt={listaRecetas.nombreReceta}
            />
          </Col>
          <Col md={6}>
            <Card.Body>
              <Card.Title className="primary-font">
                Nombre: <strong>{listaRecetas.nombreReceta}</strong>
              </Card.Title>
              <hr />
              <Card.Text>
                Descripcion: <strong>{listaRecetas.descripcion}</strong>
                <br />
                <br />
                Categoria: <strong>{listaRecetas.categoria}</strong>
                <br className="mb-3" />
              </Card.Text>
              <Card.Text>
                Pasos de la receta (incluyendo ingredientes): <br />
                <strong>{listaRecetas.pasos}</strong>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleReceta;
