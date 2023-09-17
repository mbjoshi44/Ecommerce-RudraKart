import React from 'react'
import {useSelector} from 'react-redux'
const Order = () => {

  const orderDetails = useSelector((state) => state.order.orderDetails)
  const{orderid} = orderDetails
  console.log(orderDetails);
  return (
    <>
            <div className="row ">
            <div className="col-12 text-center">
                <h1>Your Order is Successfuly Placed</h1>
            </div>
            <div className="col-12 text-center">
                <h3>Order Summary</h3>
                <div>Order id:{orderid}</div>
                <p>Track You order via order id </p>
            </div>
        </div>
        
    </>
    
  )
}

export default Order