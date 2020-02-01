<template>
    <div class="todo-list">
        <Todo v-for="(todo, id) in allTodos" :key="id" :todo="todo" :id="id+1" :index="(todo.id)"></Todo>
        <button class="button add-new-todo" @click="addNewTodo">
            Новая заметка
        </button>  
    </div>
</template>

<script>
import Todo from './Todo'
export default {
    data (){
        return{
            
        }
    },
    components: {
        Todo
    },
    computed: {
        allTodos: {
            get () {
                return this.$store.state.allTodos
            }
        }
    },
    methods: {
        addNewTodo: function(){
            this.$store.commit('add')
            this.$router.push('/inspect/' + this.allTodos.length)
        }
    }
}
</script>

<style>

</style>