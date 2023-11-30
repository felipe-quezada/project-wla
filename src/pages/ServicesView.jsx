import { Container } from "react-bootstrap"
import CardComponent from "../components/CardComponent"

export const ServicesView = () => {
  return (
    <div style={{marginBlock: '50px'}}>
      <h2 className='text-light text-center'>Nuestros servicios</h2>
      <br />
      <Container as={'section'} className='d-flex flex-wrap justify-content-center'>
        <CardComponent urlImage={'remodelacion.jpg'} title="Servicios de remodelación">
          Some quick example text to build on the card title and make up the bulk of the cards content.
        </CardComponent>
        <CardComponent urlImage={'pintura.jpg'} title="Servicios de pintura">
        Some quick example text to build on the card title and make up the bulk of the cards content.
        </CardComponent>
        <CardComponent urlImage={'carpinteria.jpg'} title="Servicios de carpintería">
          Some quick example text to build on the card title and make up the bulk of the cards content.
        </CardComponent>
      </Container>
      <br />
    </div>
  )
}
