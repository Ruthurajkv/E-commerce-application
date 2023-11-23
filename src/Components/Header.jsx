import React from 'react'
import { Nav,Navbar,Container,Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cartlist = useSelector((state)=>state.cartlistReducer)
  return (
    <>
        <Navbar expand="lg" className="bg-info">
      <Container>
        <Navbar.Brand ><Link to={'/'} style={{textDecoration:'none'}}><i class="fa-brands fa-opencart"></i>E-Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link><Link to={'/cart'} style={{textDecoration:'none'}}>Cart<Badge className='ms-2 rounded' bg="secondary">{cartlist.length}</Badge></Link></Nav.Link>
            <Nav.Link><Link to={'/wishlist'} style={{textDecoration:'none'}}>Wishlist<Badge className='ms-2 rounded' bg="secondary">{wishlist.length}</Badge>
</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header