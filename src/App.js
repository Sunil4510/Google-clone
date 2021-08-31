import React from 'react'
import "./App.css"
import Home from './pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SearchPage from './pages/SearchPage'

const App = () => {
  return (
    <React.Fragment>
    <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/search"><h1><SearchPage/></h1></Route>
            <Route exact path="/"><Home/></Route>
          </Switch>
        </BrowserRouter>
    </div>
    </React.Fragment>
  )
}

export default App
