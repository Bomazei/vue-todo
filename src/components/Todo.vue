<template> 
    
        <div class="todo">
            <h3 class="title">{{todo.title}}</h3>
            
            <ul class="todos">
                <li class="item" v-for="(item, index) in todo.items" :key="index" :class="{ completed: item.completed }">
                    <span class="item-text">{{index+1+'. '}}{{item.text}}   </span>     
                </li>
            </ul>
            <div class="todo-buttons">
                <button @click="deleteTodo(id)" class="button delete-todo"><i class="flaticon-trash"></i></button>
                <button @click="inspect" class="button inspect-todo"><i class="flaticon-search"></i></button>
            </div>
            
        </div>
    

    
</template>

<script>
export default {
    props: ["todo", "id", "index"],
    data (){
        return{
            inputText: '',
            items: [],
        }
    },
    methods: {
        inspect: function() {
            this.$router.push('/inspect/' + this.id)
        },
        deleteTodo: function(id) {
            this.$store.commit('delete', id)
            
        }
    },
    
}
</script>

<style>
    
</style>