import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allTodos: [
      {
        title: 'Сделать',
        id: 1,
        items: [
          {
            text: 'Уроки',
            edit: false,
            completed: false
          },
          {
            text: 'Массаж',
            edit: false,
            completed: false
          },
          {
            text: 'Побегать',
            edit: false,
            completed: true
          },
        ]
      },
      {
        id: 2,
        title: 'Купить',
        items: [
          {
            text: 'Молоко',
            edit: false,
            completed: false,
        },
        {
            text: 'Чай',
            edit: false,
            completed: false,
        }
        ]
      }
      
    ],
  },
  mutations: {
    save(state, items, id) {
      state.allTodos[id].items = items
    },
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
    
    },
    delete(state, id) {
      state.allTodos.splice(id-1, 1)
    }

  },
  actions: {
  },
  modules: {
  }
})
