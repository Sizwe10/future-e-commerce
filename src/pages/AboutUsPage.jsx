import React from 'react'
import NavHeader from '../component/NavHeader'
import Card from 'react-bootstrap/Card';
import Footer from '../component/Footer'

const AboutUsPage = () => {
  return (
    <div>
      <NavHeader />
      <div className='container mt-5'>
        <div className='row'>
          <div className='display-5 text-center my-3'>About Us</div>

          <h3>INTRODUCE</h3>

          <span>Future store is a business concept is to offer fashion and quality at the best price. It has since it was founded in 2022 grown into one of the best WooCommerce Fashion Theme. The content of this site is copyright-protected and is the property of S.S Nqwala Creative.</span>

          <span className="text-center my-5"><strong>TEAM MEMBERS</strong></span>

        </div>
    
    <div className='Container mt-5 d-flex justify-content-center'>
        <Card style={{ width: '18rem' }}>
          <Card.Img src="https://htmldemo.net/norda/norda/assets/images/team/team-1.jpg" />
          <h6 className='text-center'>Mr. Mike Banding</h6>
          <h6 className='text-center'>Manager</h6>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img src="https://htmldemo.net/norda/norda/assets/images/team/team-2.jpg" />
          <h6 className='text-center'>Mr. Mike Banding</h6>
          <h6 className='text-center'>Manager</h6>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img src="https://htmldemo.net/norda/norda/assets/images/team/team-3.jpg" />
          <h6 className='text-center'>Mr. Mike Banding</h6>
          <h6 className='text-center'>Manager</h6>
        </Card>

        <Card style={{ width: '18rem' }}>
          <Card.Img src="https://htmldemo.net/norda/norda/assets/images/team/team-4.jpg" />
          <h6 className='text-center'>Mr. Mike Banding</h6>
          <h6 className='text-center'>Manager</h6>
        </Card>
      </div>
    </div>
      <Footer />
    </div>
  )
}

export default AboutUsPage
