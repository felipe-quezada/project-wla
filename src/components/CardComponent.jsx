import PropTypes from 'prop-types'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CardComponent = ({urlImage, title, children}) => {

  const imageSource = `/images/${urlImage}`
  const requestService = `Quiero cotizar los ${title}`

  return (
    <Card className='m-3 text-center' style={{ width: '18rem', marginBlock:'5px' }}>
      <Card.Img variant="top" src={imageSource} />
      <Card.Body>
        {title? <Card.Title>{title}</Card.Title> : null}
        <Card.Text>
          {children}
        </Card.Text>
        <Button as={Link} state={{requestService}} variant="warning" to={'/contact'}>Cotiza este servicio</Button>
      </Card.Body>
    </Card>      
  )
}

CardComponent.propTypes = {
  children: PropTypes.node.isRequired,
  urlImage: PropTypes.string.isRequired,
  title: PropTypes.string,
}

export default CardComponent
