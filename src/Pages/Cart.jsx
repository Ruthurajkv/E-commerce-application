import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { emptyCart, removeFromCart } from '../Redux/slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const cartlistArray = useSelector((state)=>state.cartlistReducer)
  const dispatch = useDispatch()
  const [total,setTotal] = useState(0)
  const navigate = useNavigate()
  const getCartTotal =()=>
  {
    if(cartlistArray.length>0)
    {
      setTotal(cartlistArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }
  const handleCart =()=>{
    dispatch(emptyCart())
    alert("Order successfully placed...")
    navigate('/')
  }
  useEffect(()=>{
    getCartTotal()
  },[cartlistArray]) //based on that if any changes made in it to re-render


  return (
    <div className='container'style={{marginTop:'0px'}}>

        {
          cartlistArray.length>0?
          <div className="row mt-5 d-flex flex-row">
            <div className="col-lg-7">
              <div className="table shadow border">
                <thead>
                  <th>#</th>
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Action</th>
                </thead>
                <tbody>
                  {
                    //providing unique key index
                    cartlistArray.map((product,index)=>(
                      <tr key={index}>
                        <td>{index+1}</td>
                        <td>{product.title}</td>
                        <td><img width={'100px'} height={'100px'} src={product.thumbnail} alt=''/></td>
                        <td>${product.price}</td>
                        <td><Button onClick={()=>dispatch(removeFromCart(product/*.id*/))}  className='btn btn-light'><i className='fa-solid fa-trash text-danger fa-2x'></i></Button></td>
                      </tr>
                    ))
                  }
                </tbody>
                
              </div>
            </div>

            <div className="col-lg-1"></div>
              <div className='col-lg-4'>
                
                <div className="border mt-3 p-3 rounded shadow">
                <h1 className="text-primary">Cart Summary
                </h1>
                <h4>Total product:<span>{cartlistArray.length}</span></h4>
                <h4 className='mt-3'>Total :<span className='text-success fw-bolder fs-2 '>${total}</span></h4>
                <div className="d-grid">
                  <div onClick={handleCart}className="btn btn-info mt-3 rouned">
                    Check Out
                  </div>

                </div>
                </div>
                </div>
          </div>
  :<div className='w-100 d-flex justify-content-center align-items-center flex-column' style={{height:'100vh'}}>
      <img width='500px'src='https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif' alt=''/>
      <h2>Your Cart is empty...</h2>
      <Link to={'/'} className='btn btn-success rounded mt-3'>Back To Home</Link>
    </div>
         
        }
   <ToastContainer
      position='top-center'
      theme='colored'
      autoClose ={2000}
      />
    </div>
  )
}

export default Cart