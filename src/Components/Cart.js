import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import { removeCartData } from '../redux/action/cartAction'
const Cart = () => {
  const navigate = useNavigate()
    const cartData = useSelector((state)=> state.cart.cartList)
    const loginInfo = useSelector((state)=>state.log.loginData)
    console.log(loginInfo);
    const dispatch = useDispatch()
    const deleteItem =(productId)=>{

      dispatch(removeCartData(productId))
    }
    let count=0;
    let shippingCharge = 40
    for(let i = 0;i<cartData.length;i++){
            count += cartData[i].price
    }
     const naviFn =()=>{
            if(loginInfo ===true){
              if(cartData.length===0){
                alert("please Select Product");
                return
              }else
              navigate("/checkout")
            }else{
              navigate("/login")
            }
     }

  return (
    <div className='row'>
    <div className='col-2'></div>
        <div className='col-5 my-5 '>
          <span className='fw-bold'>Total Cart Items :{cartData.length}</span>
      
       {
        cartData?.map((item,index)=>(
          <div className="col-8 d-flex my-5" key={index}>
          <img src={item.image} alt='pics' className='img-fluid'  style={{width : "80px"}}/>
          <div className='mx-5 '>

          <p className='fw-bold'>{item.title.substring(0,15)}...</p>
          <i className="fas fa-rupee-sign"></i>{item.price}
          <p>Quantity:1</p>

          <button onClick={()=>{deleteItem(item.id)}} className='btn btn-outline-dark'><i className="fa fa-times"></i><span> Cancel</span></button>
          </div>
          
          </div>
        ))
       }
        </div>
        <div className="col-4 my-5 border">
        <h4>Price Details</h4>
        <div className='my-2'>Total Price:{count}
        </div>
        <div className='my-2'>
          Shipping: {count===0 ?<span>{""}</span>:  (count>500? <span>Order Aboue 500 shipping charge will be 0</span>:<span>{shippingCharge}</span>) }
        </div>
       <div><span className='fw-bold my-2'>Total Amount:</span>({count + shippingCharge})</div>
        <button className=' my-2 btn btn-outline-dark' onClick={naviFn}>Countinue</button>
        </div>
       
        
    </div>
  )
}

export default Cart







