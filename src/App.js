import React from 'react'
import { Home, Detail } from 'templates/index'
import { Redirect, Route } from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom'


const App = () => {
  
  return (<div>
    <Router>
      <Route exact path='/home' component={Home} />
      <Redirect exact from={'/'} to={'/home'} />
      <Route exact path='/movie/:id' component={Detail} />
    </Router>
  </div>
    
  )
}

export default App;
