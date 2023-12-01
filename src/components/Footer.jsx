import { Col, Container, Row } from "react-bootstrap"

export const Footer = () => {
  return (
    <section className="main-footer" style={{backgroundColor: '#e6b300', paddingBlock: '40px'}}>
      <Container>
        <Row>
          <Col>
            <h6>Telefono: +56 9 8244 5598</h6>
          </Col>
          <Col className="text-center">
            <h4>Construcciones Salas Reyes &copy;</h4>
            <p>{new Date().getFullYear()}</p>
          </Col>
          <Col className="text-end">
            <h6>Dirección: Juan XXIII #12451, La Pintana</h6>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
