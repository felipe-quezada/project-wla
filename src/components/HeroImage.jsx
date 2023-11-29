import PropTypes from 'prop-types';

export const HeroImage = ({urlImage, height = '500px', children}) => {
  
  const backgroundImage = `url('/images/${urlImage}')`

  return (
    <section className='text-center bg-image'
      style={{
        height,
        backgroundImage,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }}>
      <div
        className='mask'
        style={{
          height, 
          width: 'full',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <div className='text-white' style={{width: '60%', maxWidth: '1250px'}}>
            {children}
          </div>
        </div>
      </div>
        
    </section>
  )
}

HeroImage.propTypes = {
  urlImage: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  height: PropTypes.string
}
