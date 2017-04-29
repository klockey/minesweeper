import React, { Component } from 'react'
import store from './store'

class GameBoard extends Component {
  makeTableHTML = (myArray) => {
    console.log('makeTableHTML')
    var result = '<table>'
    for (var i = 0; i < myArray.length; i++) {
      result += '<tr>'
      for (var j = 0; j < myArray[i].length; j++) {
        result += '<td>' + myArray[i][j] + '</td>'
      }
      result += '</tr>'
    }
    result += '</table>'

    return result
  }

  render () {
    return <div>
      <div> { this.makeTableHTML(this.props.board) } </div>
    </div>
  }
}

export default GameBoard
