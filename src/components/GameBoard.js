import React, { Component } from 'react'
// import Home from './Home'
import store from './store'
// import StartGame from './StartGame'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import MakeTable from './MakeTable'

class GameBoard extends Component {
  render () {
    console.log('1 2' + store.status)
    return <div>
      <MakeTable board={store.board} status={store.status} />
    </div>
  }
}

export default GameBoard
