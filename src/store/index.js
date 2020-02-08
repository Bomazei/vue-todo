import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let allTodos = window.localStorage.getItem('allTodos')

export default new Vuex.Store({
  state: {
    allTodos: allTodos ? JSON.parse(allTodos) : []
  },
  mutations: {
    add(state) {
      let item = {
          title: 'Заголовок',
          items: [
            
          ],
          actions: [

          ]
        }
        
      if(state.allTodos.length == 0){
        item.id = 1
      } else {
        item.id = state.allTodos[state.allTodos.length-1].id + 1
      }
      state.allTodos.push(item)
      this.commit('saveData')
    },
    delete(state, id) {
      state.allTodos.splice(id-1, 1)
      this.commit('saveData')
    },
    saveData(state){
      window.localStorage.setItem('allTodos', JSON.stringify(state.allTodos))
    },
    undo(state, id) {
      if(state.allTodos[id-1].actions) {
        let action = state.allTodos[id-1].actions[state.allTodos[id-1].actions.length-1]
        if (action.name === 'add') {
          
          state.allTodos[id-1].items.splice(state.allTodos[id-1].actions.length-1, 1)
          state.allTodos[id-1].actions.splice(state.allTodos[id-1].actions.length-1, 1)
          this.commit('saveData')
        } 
        if (action.name === 'delete') {
          
          state.allTodos[id-1].items.push({text: action.item.text, edit: action.item.edit, completed: action.item.completed});
          state.allTodos[id-1].actions.splice(state.allTodos[id-1].actions.length-1, 1)
          this.commit('saveData')
        }
      }
      
    }


  },
  actions: {
  },
  modules: {
  }
})
