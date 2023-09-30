import React,{useState, useEffect} from 'react'
import { useParams , Link} from 'react-router-dom'
import Skelton from './Skelton'

const Category = ({search}) => {
  const temp = useParams()
  const{category} = temp
  const[loading,setLoading] = useState(false)
  
  const[product, setProducts] = useState([])


  const callApi = async (category) => {
    setLoading(true)
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    .catch((err)=>console.log(err))
    const data = await response.json();
    setProducts(data);
    setLoading(false)
  }

  useEffect(() => {

    callApi(category);
  }, [category])

  return (
    <>
   <div className='row'>

   
{
  loading? <>
  <div className='col-12'>
      {/* <h2><img src='https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif' alt='loading'/></h2>
       */}
       <Skelton/>
       <Skelton/>
    </div>
  </>:
  product && product?.filter((product)=>(
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
    </>
  )
}

export default Category