import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = () => {
  return (
    <div className='Container mt-5 d-flex justify-content-center'>
      <Card style={{ width: '18rem' }}>
        <Card.Img src="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <div className='title'><strong>Long sleeve Jacket</strong> </div>
          <div className='text-end'><strong className='woman'>woman</strong> <del className='del'>R1300</del><strong>R2000</strong></div>
          <Button variant="btn btn-dark">Add to Cart</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img src="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <div className='title'> <strong>Long sleeve Jacket</strong></div>
          <div className='text-end'><strong className='woman'>woman</strong><del className='del'>R1300</del><strong>R2000</strong> </div>
          <Button variant="btn btn-dark">Add to Cart</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img src="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <div className='title'> <strong>Long sleeve Jacket</strong> </div>
          <div className='text-end'><strong className='woman'>woman</strong> <del className='del'>R1300</del><strong>R2000</strong></div>
          <Button variant="btn btn-dark">Add to Cart</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img src="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <div className='title'><strong>Long sleeve Jacket</strong></div>
          <div className='text-end'><strong className='woman'>woman</strong> <del className='del'>R1300</del> <strong>R2000</strong> </div>
          <Button variant="btn btn-dark">Add to Cart</Button>
        </Card.Body>
      </Card>


    </div>
  )
}

export default ProductCard
