import { Col, Container, Row } from "react-bootstrap"

export const AboutView = () => {
  return (
    <Container className="text-white" style={{marginBlock: '50px', height: '100vh'}}>
      <Row>
        <Col sm={8} className="d-flex flex-column align-items-center justify-content-center">
          <h1>Quienes somos</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae soluta autem sint? A mollitia hic earum aliquid cum accusamus vel, unde repudiandae perferendis obcaecati atque nesciunt, suscipit omnis illo.</p>
        </Col>
        <Col sm={4}>
          <img src="/images/hero.jpg" alt="hero" className="img-fluid"/>
        </Col>
      </Row>
    </Container>
  )
}
