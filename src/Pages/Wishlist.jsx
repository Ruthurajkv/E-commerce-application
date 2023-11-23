import React from 'react'
import { useSelector } from 'react-redux'
import { Row,Col,Card,Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { removeFromWishlist } from '../Redux/slices/wishlistSlice'
import { addToCart } from '../Redux/slices/cartSlice'

function Wishlist() {
  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()
  const handleWishList =(product)=>
  {
    dispatch(addToCart(product))
    dispatch(removeFromWishlist(product.id))
  }
  return (
    <div style={{marginTop:'0px'}}>
      <Row className='m-5'>
        {
          wishlistArray.length>0?wishlistArray.map((product,index)=>(
<Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}> 
    <Card className='shadow rounded'style={{ width: '18rem',height:'28rem' }}>
      <Card.Img variant="top"  height='200px'src={product.thumbnail} />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>
         <p>{product?.description}</p>
         <h5>${product?.price}</h5>
        </Card.Text>
        <div className='d-flex justify-content-between'>
          <Button onClick={()=>dispatch(removeFromWishlist(product/*.id*/))}  className='btn btn-light'><i className='fa-solid fa-trash text-danger fa-2x'></i></Button>
          <Button onClick={()=>(handleWishList(product.id))}className='btn btn-light'><i className='fa-solid fa-cart-plus text-success fa-2x'></i></Button>
        </div>
      </Card.Body>
    </Card>


    </Col>
    )):<div className='w-100 d-flex justify-content-center align-items-center flex-column' style={{height:'100vh'}}>
      <img width='2  00px'src='https://i.pinimg.com/originals/00/42/e9/0042e9e974c75d7e971491c420cca101.gif' alt=''/>
      <h2>Your wishlist is empty...</h2>
      <Link to={'/'} className='btn btn-success rounded mt-3'>Back To Home</Link>
    </div>
         
        }
      </Row>
    </div>
  )
}

export default Wishlist