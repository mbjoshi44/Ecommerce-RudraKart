import React ,{useState} from 'react'
import { useSelector } from 'react-redux'
import "./nav.css"
import {Link} from "react-router-dom"
const Nav = () => {
    const[clicked,setClicked] = useState(false)
const handleBurger =()=>{
    setClicked(!clicked)
}
 const cartData = useSelector((state) => state.cart.cartList);
    return (
    <>
        <nav className='main-nav'>
        {/* <Link className='nav-link' to="/">
            <div className="logo">
            <h3>    <span>R</span>udra
                <span>K</span>art
                </h3>    
            </div></Link> */}
            {/* for Menu */}
            <div >
                <ul className={clicked?  "menu-link active":"menu-link"}>
                <Link className='nav-link' to="/category/electronics"> <li>
                   Electronics
                    </li></Link>
                    <Link className='nav-link' to="/category/jewelery">          <li >
          Jewellery
         </li></Link>
         <Link className='nav-link' to="/category/men's clothing"><li>
          Men's clothing
        </li></Link>
        <Link className='nav-link' to="/category/women's clothing"><li >
           Women's clothing
         </li></Link>

    
    
    <span className='mobile'>     <li >
    <Link to="/login" className='nav-link'>
    <i className="fa fa-user"></i>Login 
        </Link>
    </li>
    <li className='nav-item' >
    <Link to="/ragister" className='nav-link'>
        <i className="fa fa-user-plus"></i>Ragistration 
        </Link>
    </li>
    <li className='nav-item' >
    <Link to="/cart" className='nav-link'>
        <i className="fa fa-shopping-cart"></i>Cart ({cartData.length>0 ?<span >{cartData.length}</span>:0})
        </Link>
    </li>
    </span>
           </ul>
            </div>
            <div className='mobile text-black fw-bold'> <span>Categories</span>
                <i onClick={handleBurger} className={clicked? "fa fa-times":'fa fa-bars'}></i>
                
            </div>
        </nav>
    </>
  )
}

export default Nav