import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './Store'
import App from './App'

class MakeTable extends Component {
  makeTableHTML = (myArray) => {
    console.log('status ' + this.props.status)
    console.log('board ' + this.props.board)
    if (this.props.status === 'table') {
      console.log('makeTableHTML')
      store.result = '<table>'
      for (var i = 0; i < myArray.length; i++) {
        store.result += '<tr>'
        for (var j = 0; j < myArray[i].length; j++) {
          store.result += '<td>' + myArray[i][j] + 'x' + '</td>'
        }
        store.result += '</tr>'
      }
      store.result += '</table>'
    }
  }

  render () {
    return <div>
      <input type='button' value='keith' onClick={() => this.makeTableHTML(this.props.board)} />
      <div dangerouslySetInnerHTML={{ __html: store.result }} />
    </div>
  }
}

export default MakeTable
