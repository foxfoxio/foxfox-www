import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Aww from './Aww'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/aww" component={Aww} />
      <Route component={Aww} />
    </Switch>
  )
}

export default App
