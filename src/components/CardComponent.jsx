import PropTypes from 'prop-types'
import { Button, Card } from 'react-bootstrap'

const CardComponent = ({urlImage, title, children}) => {

  const imageSource = `/images/${urlImage}`

  return (
    <Card className='m-3 text-center' style={{ width: '18rem', marginBlock:'5px' }}>
      <Card.Img variant="top" src={imageSource} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {children}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>      
  )
}

CardComponent.propTypes = {
  urlImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default CardComponent
