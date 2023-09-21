import React  from 'react'
import { useSelector } from 'react-redux'
import "./header.css"
import {Link} from "react-router-dom"
const Nav = ({setSearch}) => {


const cartData = useSelector((state) => state.cart.cartList);
    return (
    <>
        <nav className='main-nav'>
        <Link className='nav-link' to="/">
            <div className="logo">
            <h4>    <span>R</span>udra
                <span>K</span>art
                </h4>    
            </div></Link>
            <form >
                <input type="text"
                placeholder='Search for ...' 
                     onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
                />
                
            </form>
            {/* for Menu */}
            <div >
                <ul className="menu-link">
             <li >
    <Link to="/login" className='nav-link'>
    <i className="fa fa-user"></i> 
        </Link>
    </li>
    <li className='nav-item' >
    <Link to="/ragister" className='nav-link'>
        <i className="fa fa-user-plus"></i>  
        </Link>
    </li>
    <li className='nav-item' >
    <Link to="/cart" className='nav-link'>
        <i className="fa fa-shopping-cart"></i> ({cartData.length>0 ?<span >{cartData.length}</span>:0})
        </Link>
    </li>
           </ul>
            </div>
           
        </nav>
    </>
  )
}

export default Nav