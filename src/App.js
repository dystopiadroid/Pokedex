import React from 'react'
import { Provider } from 'react-redux'
import { Switch } from 'react-router-dom'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import AppNavigator from './components/AppNavigator'
import Favourites from './container/Favourites'
import Pokedex from './container/Pokedex'
import PokemonDetails from './container/PokemonDetails'
import  { store, persistor } from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AppNavigator/>
          <Switch>
            <Route exact path="/pokemon/:id" component={PokemonDetails}/>
            <Route exact path="/" component={Pokedex}/>
            <Route exact path="/favourites" component={Favourites}/>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  )
}

export default App