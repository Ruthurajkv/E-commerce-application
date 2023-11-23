import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column bg-info' style={{width:'100%',height:"300px"}}>
      <div className="footer-content d-flex justify-content-evenly w-100 ">
      <div style={{width:'400px'}}className='website'>
        <h4>E-cart</h4>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicingelit. Ipsum obcaecati error quaerat quas? Exercitationem esse distinctio voluptatum, provident cumque repellendus neque quibusdam autem, laborum tempora cupiditate reiciendis ipsam incidunt error?</h6>
      </div>
      <div className='links d-flex flex-column'>
        <h4>Links</h4>
        <Link to={'/' } style={{textDecoration:"none",color:'black'}}>Home</Link>
        <Link to={'/cart' } style={{textDecoration:"none",color:'black'}}>Cart</Link>
        <Link to={'/wishlist' } style={{textDecoration:"none",color:'black'}}>Wishlist</Link>
      </div>
      <div className='guides d-flex flex-column'>
        <h4>Guides</h4>
        <Link to={'/' } style={{textDecoration:"none",color:'black'}}>React</Link>
        <Link to={'/home' } style={{textDecoration:"none",color:'black'}}>Timeups</Link>
        <Link to={'/watch-history' } style={{textDecoration:"none",color:'black'}}>Motivation</Link>
      </div>
      </div>
      <p>Due to copyright issue 2022 E-cart</p>
    </div>
  )
}

export default Footer