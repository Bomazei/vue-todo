<template>
    <div class="inspect">
        <div class="inspect-todo">
            
            <div class="todo">
                <input type="text" class="input title" v-model="todo.title">
                <div class="add">
                    <input type="text" placeholder="Добавить..." v-model="inputText" class="input add-item" maxlength="24">
                    <button class="button add-item-button" v-on:click="addItem">+</button>
                </div>
                <ul class="todos">
                    <li class="item" v-for="(item, index) in todo.items" :key="index" :class="{ completed: item.completed }">
                        <div>
                            <input v-if="! item.edit" type="checkbox" v-model="item.completed" class="checkbox">
                            <span v-if="! item.edit" class="checkbox-span"></span>
                            <span v-if="! item.edit" class="item-text">{{item.text}}</span>
                        </div>
                        <input type="text" class="input item-text-editting" v-model="item.text" v-if="item.edit" v-focus v-on:keyup.enter="disableEdit(index)" v-on:blur="disableEdit(index)">
                        <div class="item-control">
                            <button class="button change-item" v-on:click="enableEdit(index)"><i class="flaticon-pen"></i></button>
                            <button class="button delete-item" v-on:click="deleteItem(index)"><i class="flaticon-trash"></i></button>
                        </div>
                        
                    </li>
                </ul>
            </div>
        </div>
        <div class="control-todo">

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            inputText: '',
            url: this.$route.params.id - 1
        }
    },
    computed: {
        todo: {
            get () {
                return this.$store.state.allTodos[this.url]
            }
        }
    },
    directives: {
        focus: {
            inserted: function (el) {
                el.focus()
            }
        }
    },
    methods: {
        addItem: function() {
            if(this.inputText !== ''){
                this.todo.items.push({text: this.inputText, edit: false, completed: false});
                this.inputText = '';
            }
        },
        deleteItem: function(index) {
            this.todo.items.splice(index, 1)
        },
        enableEdit: function(index) {
            this.todo.items[index].edit = true;
        },
        disableEdit: function(index) {
            this.todo.items[index].edit = false;
        }
    }
}
</script>

<style>

</style>