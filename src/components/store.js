import { computed, observable } from 'mobx'

class Store {
@observable state =''
@observable view = ''
@observable gameOver = false
@observable view = ''
@observable id: ''
@observable board: ''
@observable state: 'start'
@observable mines: ''
@observable gameOver: false
@observable startBoard: ''
}

const store = new Store()
window.store = store
export default store
