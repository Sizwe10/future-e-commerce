import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Silder = () => {
  return (
    <div>
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Silder
