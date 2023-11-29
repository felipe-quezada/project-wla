import PropTypes from 'prop-types'
import { Carousel } from 'react-bootstrap'

export const Slider = ({itemsSlider}) => {
  return (
    <Carousel variant='dark' fade>
      {itemsSlider.map((itemSlider, index) => (
        <Carousel.Item key={index} style={{height: '400px'}} interval={4000}>
          <img className="d-block w-100" style={{width: '100%'}} src={`/images/${itemSlider.urlImage}`} alt={itemSlider.title} />
          <Carousel.Caption>
            <h3>{itemSlider.title}</h3>
            <p>{itemSlider.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
        ))
      }
    </Carousel>
  )
}

Slider.propTypes = {
  itemsSlider: PropTypes.arrayOf(PropTypes.shape({
    urlImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }))
}
