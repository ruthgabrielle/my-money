import React from  'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './elements/Header'
import Home from './pages/Home'
import Moviments from './pages/Moviments'

function App() {
  return (
    <Router>    
      <div>
        <Header/>
        <Route path='/' exact component={Home}/>
        <Route path='/movimentacoes/:data' exact component={Moviments}/>
      </div>
    </Router>
  )
}

export default App
