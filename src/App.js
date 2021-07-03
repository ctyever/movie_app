import React from 'react'
import { Movie } from 'templates/index'
import { BrowserRouter as Router } from 'react-router-dom'


const App = () => {

  
  return (<div>
    <Router>
      <Movie/>
    </Router>
  </div>
    
  )
}

export default App;
