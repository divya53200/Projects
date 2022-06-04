import React,{useState,useEffect}from 'react'
import {Link,useParams} from 'react-router-dom';
import './products.css'


function Product() {
  const[products,setProducts]=useState([])

  const {id}=useParams();
  

   const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data)
}

  
  useEffect(() => {
    fetchData();
}, [])

console.log(products)

  return (
    <div>
     
      <div >
      {
         products.map(product=><div className=' d-flex-wrap border border-2 col-md-2 m-3'><Link to={`/products/${id}`}>
          
           <img   className='' src={product.image} alt='products' height='100' width='100'/></Link>
           <div>{product.title}</div>
           <div className='text-secondary'>______________________________________</div>
           <div className='text-primary'>${product.price}</div>
           <div>{product.category}</div>
        
           


         </div>)
      }
      </div>
      
    </div>
  )
}

export default Product