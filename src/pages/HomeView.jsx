import { Link } from "react-router-dom"
import { HeroImage } from "../components/HeroImage"
import { Container } from "react-bootstrap"
import { Slider } from "../components/Slider"

export const HomeView = () => {

  //TODO: Cambiar las imagenes de los slider, por las imagenes de los proyctos en un archivo json. 

  const itemsSlider = [{
    urlImage: 'remodelacion.jpg',
    title: 'Servicios de remodelación',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  }, {
    urlImage: 'pintura.jpg',
    title: 'Servicios de pintura',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  }, {
    urlImage: 'carpinteria.jpg',
    title: 'Servicios de carpintería',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.'
  }]

  return (
    <>
    <HeroImage urlImage={'hero.jpg'} >
      <h1 className='mb-3'>Eslogan</h1>
      <h4 className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
      <Link className='btn btn-outline-light btn-lg' to={'/about'} role='button'>
        Sobre nosotros
      </Link>
    </HeroImage>
    <main style={{height: 'auto', paddingBottom: '50px'}}>
      <Container
        className='d-flex flex-column align-items-center h-100'>
        <br />
        <div>
          <h2 className='text-light text-center mt-5'>Nuestros proyectos</h2>
          <br />
          <Slider itemsSlider={itemsSlider}/>
        </div>    
      </Container>
    </main>
    </>
  )
}
