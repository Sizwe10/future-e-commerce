import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom"
const NavHeader = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand to="home"> <img src='https://images-platform.99static.com//6m2oEkLGOcAM-NspjIsGTF_x0do=/992x996:1866x1870/fit-in/500x500/projects-files/81/8156/815645/5513ffc1-e979-45e3-9684-6b725aa4df71.jpg' alt='' className='NavLogo'></img> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" className='nav-link m-2 menu-item'>
                <strong>Home</strong> </Link>
              <Link to="/aboutUs" className='nav-link m-2 menu-item'>
                <strong>AboutUs</strong> </Link>
              <Link to="/blog" className='nav-link m-2 menu-item'>
                <strong>Blog</strong> </Link>
              <Link to="/contactUs" className='nav-link m-2 menu-item'>
                <strong>ContactUs</strong> </Link>

            </Nav>
          </Navbar.Collapse>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg><strong> 0</strong>

        </Container>
      </Navbar>
    </div>
  )
}

export default NavHeader
