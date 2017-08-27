import React, { Component } from 'react'
// import Home from './Home'
import store from './Store'
// import StartGame from './StartGame'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import CreateGame from './CreateGame'

class App extends Component {
  render () {
    return <div>
      <CreateGame />
    </div>
  }
}
export default App
