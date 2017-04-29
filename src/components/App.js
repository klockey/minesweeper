import React, { Component } from 'react'
// import Home from './Home'
import store from './store'
// import StartGame from './StartGame'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'
import GameBoard from './GameBoard'

class App extends Component {
  createGame (i) {
    window.fetch(`http://minesweeper-api.herokuapp.com/games?difficulty=${i}`, {method: 'POST'}).then((response) => {
      return response.json()
    }).then((data) => {
      store.id = data.id
      console.log('id ' + store.id)
      store.board = data.board
      store.state = 'start'   // data.state
      store.mines = data.mines
      store.gameOver = false
      console.log('board ' + store.board)
    })
  }
  render () {
    store.state = 'start'
    store.board = ''
    if (store.state === 'start') {
      console.log('start')
      store.view = <div className='choose'>
        <h3>Choose your difficulty:</h3>
        {/* <NavLink to='/games/:id'> */}
        <button onClick={() => this.createGame(0)}> Easy </button>
        {/* </NavLink> */}
        <button onClick={() => this.createGame(1)}> Norm </button>
        <button onClick={() => this.createGame(2)}> Hard </button>
      </div>
    // } else if (store.gameOver) {
    //   this.view = <div className='gameOver'>
    //     <h2>{store.state === 'won' ? 'You won!' : 'You lost!'}</h2>
    //     <button onClick={() => this.reset()}> New Game? </button>
    //   </div>
    // } else {
    // //  this.view = <GameBoard board={this.board} check={(x, y) => this.check(x, y)} flag={(x, y) => this.flag(x, y)} />
    // }
      return <Router>
        <div className='App'>
          <h1> Minesweeper </h1>{
          /*
        <Switch>
          <Route path='games' component={this.GameBoard} />
        </Switch> */}
          <div> { store.view } </div>
          {console.log('board ' + store.board.length)}
          <div>
            if(store.board.length > 0)
            <GameBoard board={this.board} />
          </div>
        </div>
      </Router>
    }
  }
}
export default App

// {/* <div className='flexcontainer'>
//   <Home />
//   <table>
//     <tr><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td></ tr>
//     <tr><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td></ tr>
//     <tr><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td></ tr>
//     <tr><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td></ tr>
//     <tr><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td></ tr>
//     <tr><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td></ tr>
//     <tr><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td></ tr>
//     <tr><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td></ tr>
//     <tr><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td></ tr>
//     <tr><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td></ tr>
//     <tr><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td></ tr>
//     <tr><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td></ tr>
//     <tr><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td></ tr>
//     <tr><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td></ tr>
//     <tr><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td></ tr>
//     <tr><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td><td>x</td></ tr>
//   </table>
//   <StartGame />
// </div> */}
