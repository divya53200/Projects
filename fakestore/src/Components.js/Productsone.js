import React,{useState,useEffect} from 'react'

function Productsone() {
    const[products1,setProducts1]=useState()


  const fetchData = async () => {
    const response = await fetch('https://fakestoreapi.com/products/1');
    const data = await response.json();
    setProducts1(data)
}

  
  useEffect(() => {
    fetchData();
}, [])

console.log("todos",products1)

  return (
    <div>
      <div>Divya</div>
        {
            products1.map(product1=><div>
                <img src={product1.image} alt='products1'/>
                <div>{product1.title}</div>
                <div>${product1.price}</div>
                <div>{product1.decription}</div>



            </div>)
        }
    </div>
  )
}

export default Productsone