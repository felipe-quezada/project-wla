import { Col, Container } from "react-bootstrap"
import { FormToEmail } from "../components/FormToEmail"
import { useLocation } from "react-router-dom";

export const ContactView = () => {

  const { state } = useLocation();

  return (
    <section
    className="d-flex flex-column justify-content-center align-items-center"
    style={{padding: '50px'}}>
      <Container
      className="d-flex flex-column text-white rounded-2">
        <Col className="d-flex flex-column align-items-center">
          <h1 className="text-center">Nosotros te ayudaremos</h1>
          <FormToEmail message={state?.requestService}/>
        </Col>
      </Container>
    </section>
  )
}
