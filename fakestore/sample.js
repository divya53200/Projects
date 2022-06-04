let numbers =[2,3,4,5]
let ouput =numbers.map((n,i)=>i)
console.log(ouput)
console.log(numbers)

let student={
    name:'raj',
    age:31,
    profession:'it',

}
console.log(student.name +student.age)



import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import Cricket from './Cricket.js'
import FootBall from './FootBall.js'
import Tennis from './Tennis.js'
import Home from './Home.js'
import ErrorPage from './ErrorPage.js'
import Orange from './Orange.js'


function App(){
  return(
   
   
    <Router>
    <div>App</div>
    <div>Nav bar
      <Link to='/'>Home</Link>
      <Link to='/orange'>Orange</Link>
       <Link to='/cricket'>Cricket</Link>{``}
     <Link to='/football'>FootBall</Link>{``}
     <Link to='/tennis'>Tennis</Link>{``}
     </div>
   
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>
      <Route path='/orange'>
        <Orange/>
      </Route>
      <Route path='/cricket' component={Cricket}/>

      <Route path='/football'
      render={(props)=>{
        return<FootBall {...props} />
      }}/>
    
       
      
      <Route path='/tennis'
      render={(props)=>{
        return<Tennis {...props} name='divya'/>
      }}/>
    
      <Route path='*'>
        <ErrorPage/>
      </Route>
     
     
     </Switch>
     </Router>

  )
}
export default App

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