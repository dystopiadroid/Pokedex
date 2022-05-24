import React from 'react'
import { Switch } from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import AppNavigator from './components/AppNavigator'
import Pokedex from './container/Pokedex'
import PokemonDetails from './container/PokemonDetails'

function App() {
  return (
    <Router>
      <AppNavigator/>
      <Switch>
        <Route exact path="/pokemon/:id" component={PokemonDetails}/>
        <Route exact path="/" component={Pokedex}/>
      </Switch>
    </Router>
  )
}

export default App