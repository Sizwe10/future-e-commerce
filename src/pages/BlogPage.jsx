import React from 'react'
import NavHeader from '../component/NavHeader'
import Card from 'react-bootstrap/Card';

const BlogPage = () => {
  return (
    <div>
      <NavHeader />
      <div className='container mt-5'>
        <div className='row'>
          <div className='display-5 text-center my-3'>Blog</div>
        </div>

        <div className="container text-center my-3">
          <div class="row">
            <Card style={{ width: '18rem' }}>
              <Card.Img src="https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&w=600" />
            </Card>
            <div className="col">
              <h3>GET THE WIMBLEDON LOOK AT FASHION CLOTHES</h3>

              <span className='line'>Phasellus tincidunt ultricies massa, sed tincidunt urna porta id. Nam dapibus ultricies lectus,Vestibulum vulputate</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default BlogPage
