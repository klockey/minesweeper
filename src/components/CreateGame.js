import React, { Component } from 'react'
import store from './Store'
import MakeTable from './MakeTable'

class CreateGame extends Component {
  componentDidMount () {
    window.fetch('http://minesweeper-api.herokuapp.com/games?difficulty=1', {method: 'POST'}).then((response) => {
      return response.json()
    }).then((data) => {
      store.id = data.id
      console.log('id ' + store.id)
      store.board = data.board
      store.mines = data.mines
      store.gameOver = false
      store.status = 'table'
      console.log('board 1' + store.status)
      console.log(store.board)
    })
  }
  render () {
    return <div className='CreateGame'>
      <div className='App'>
        <h3> Minesweeper < /h3>
        <h3>Choose your difficulty:< /h3>
        <MakeTable board={store.board} status={store.status} />
        <MakeTable board={store.board} status={store.status} />
        <MakeTable board={store.board} status={store.status} />
      </div>
    </div>
  }
}

export default CreateGame
