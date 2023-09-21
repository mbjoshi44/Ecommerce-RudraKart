/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { setProduct } from '../redux/action/productAction'
import { Link } from "react-router-dom"

const Home = ({search}) => {
  
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.listProduct)
  const[loading,setLoading] = useState(false)
  const getData = async () => {
    setLoading(true)
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json()
    // console.log(data);
    dispatch(setProduct(data));
    setLoading(false)

  }
  useEffect(() => {
    getData()
  }, [])
  
  return (
  <div className='row'>

   
      {
        loading? <>
        <div className='col-12'>
            <h2><img src='https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif' alt='loading'/></h2>
          </div>
        </>:
        products && products?.filter((product)=>(
          product.title.toLowerCase().includes(search)
        ))
        .map((product) => (
         <div className='col-md-3 mb-5 mt-5' key={product.id}>
         <Link to={`/products/${product.id}`} className=" nav-link" >
          <div className="card h-100 text-center">
          <img src={product.image} alt={product.title} className="card-img-top" height='250px' />
          <div className="card-body">
            <h5 className='card-title mb-0'>{product.title.substring(0,12)}</h5>
            <p className='card-text lead fw-bold'><i className="fas fa-rupee-sign"></i>{product.price}</p>
          </div>      
          </div>
          </Link>
         </div>
        
        
        ))
      }
    </div>
  )
}

export default Home
