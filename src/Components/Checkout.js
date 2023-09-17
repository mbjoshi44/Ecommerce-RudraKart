import React from 'react'
import { Link, useNavigate ,} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import { checkOutOrder } from '../redux/action/checkOutAction'


const Checkout = () => {
    const navigate = useNavigate()
    const cartData = useSelector((state)=> state.cart.cartList)
    const dispatch = useDispatch()
    const initialFormData = {
        name: "Moti Joshi",
        contact :"9530048734",
        address: 'jodhpur'
    }
   
    const placeOrder =()=>{
        //place Order
        //getting details of orders(redux.cart)
        const orderObj = {
                ...initialFormData,
                products: cartData,
                paymentStatus:'cod'
        }
        dispatch(checkOutOrder(orderObj))
        navigate("/order")
    }
    const storedUser = JSON.parse(localStorage.getItem('user'));

  return (
    <>
        <div className="row">
            <div className="col-6 border">
                <h3>User Details</h3>
               <div>
               <h5>Hello {storedUser.username} Please Enter Your details</h5>
                <div>
                Address: <input type="text" placeholder='Enter Your Address' />
                Contact Number: <input type="number" placeholder='Enter Your Contact Number' />
                </div>
                </div>
            </div>
            <div className="col-6">
                Payment Details
                <div>
                Mode Of Payment: Cash On Delivery
                </div>
            </div>
        </div>
        <div className="row text-center">
            <div className="col-4"></div>
            <div className="col-4 mt-5">
                <Link to="/order"><button onClick={placeOrder} className='btn btn-success'>Place Order</button></Link>
            </div>
            <div className="col-4"></div>
        </div>
    </>
  )
}

export default Checkout