import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let allTodos = window.localStorage.getItem('allTodos')

export default new Vuex.Store({
  state: {
    allTodos: allTodos ? JSON.parse(allTodos) : []
    // allTodos: [
    //   {
    //     title: 'Сделать',
    //     id: 1,
    //     items: [
    //       {
    //         text: 'Уроки',
    //         edit: false,
    //         completed: false
    //       },
    //       {
    //         text: 'Массаж',
    //         edit: false,
    //         completed: false
    //       },
    //       {
    //         text: 'Побегать',
    //         edit: false,
    //         completed: true
    //       },
    //     ]
    //   },
    //   {
    //     id: 2,
    //     title: 'Купить',
    //     items: [
    //       {
    //         text: 'Молоко',
    //         edit: false,
    //         completed: false,
    //     },
    //     {
    //         text: 'Чай',
    //         edit: false,
    //         completed: false,
    //     }
    //     ]
    //   }
      
    // ],
  },
  mutations: {
    add(state) {
      let item = {
          title: 'Заголовок',
          items: [
            
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
    }


  },
  actions: {
  },
  modules: {
  }
})
