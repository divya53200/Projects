import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link,} from 'react-router-dom'
import Products from './Components.js/Products'
import Productsone from './Components.js/Productsone'
import Orange from './Components.js/Orange'


function App() {
  return (
    <Router>
    <div>App
      <Link to='/Products'>Products</Link>
      <Link to='/productsone'>Productsone</Link>
      <Link to='/orange'>Orange</Link>
        
    </div>


    <Switch>
        <Route path='/Products'>
            <Products/>
        </Route>
        <Route path='/productsone'>
            <Productsone/>
        </Route>
        <Route path='/orange'>
            <Orange/>
        </Route>
        <Route path='/products/:id'>
          <Productsone/>
        </Route>
    </Switch>
    </Router>

  )
}

export default App