import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ProductCard = () => {
  return (
    <div className='Container mt-5 d-flex justify-content-center'>
      <Card style={{ width: '18rem' }}>
        <Card.Img src="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <div className='title'> Long sleeve Jacket</div>
          <div className='text-end'>R2000 </div>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img src="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <div className='title'> Long sleeve Jacket</div>
          <div className='text-end'>R2000 </div>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img src="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <div className='title'> Long sleeve Jacket</div>
          <div className='text-end'>R2000 </div>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Img src="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600" />
        <Card.Body>
          <div className='title'> Long sleeve Jacket</div>
          <div className='text-end'>R2000 </div>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
      
     
    </div>
  )
}

export default ProductCard
