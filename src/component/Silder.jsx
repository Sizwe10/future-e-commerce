import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Silder = () => {
  return (
    <div>
      <Carousel>
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

      <div className='container mt-5'>
        <p className="text-center display-9 my-1"><strong>Less time and energy wasted. <br></br>Keep reading through these shopping quotes from TV shows and<br></br> movies and people who love shopping to better understand why it makes them happy.</strong></p>
      </div>
    </div>
  )
}

export default Silder
