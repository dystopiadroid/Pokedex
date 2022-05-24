import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AppNavigator from './components/AppNavigator'
import Pokedex from './container/Pokedex'

function App() {
  return (
    <Router>
      <AppNavigator/>
      <Route path="/" component={Pokedex}/>
    </Router>
  )
}

export default App