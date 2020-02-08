<template>
    <div class="inspect">
        <div class="inspect-todo">
            
            <div class="todo">
                <input type="text" class="input title" v-model="todo.title">
                <div class="add">
                    <input type="text" placeholder="Добавить..." v-model="inputText" class="input add-item" maxlength="24" @keyup.enter="addItem">
                    <button class="button add-item-button" @click="addItem">+</button>
                </div>
                <ul class="todos">
                    <li class="item" v-for="(item, index) in todo.items" :key="index" :class="{ completed: item.completed }">
                        <label class="item-container">
                            <input v-if="! item.edit" type="checkbox" v-model="item.completed" class="checkbox">
                            <span v-if="! item.edit" class="item-text">{{item.text}}</span>
                            <span v-if="! item.edit" class="checkmark"></span>
                        </label>
                        <input type="text" class="input item-text-editting" v-model="item.text" v-if="item.edit" v-focus @keyup.enter="disableEdit(index)" v-on:blur="disableEdit(index)">
                        <div class="item-control">
                            <button class="button change-item" @click="enableEdit(index)"><i class="flaticon-pen"></i></button>
                            <button class="button delete-item" @click="deleteItem(index)"><i class="flaticon-trash"></i></button>
                        </div>
                        
                    </li>
                </ul>
            </div>
        </div>
        <div class="control-todo">
            <div class="control-panel">
                <h3 class="control-panel-title">Панель управления</h3>
                
                <button class="button button-save" @click="saveRes">Сохранить</button>
                <button class="button button-back" @click="back = true">Назад</button>
                <button class="button button-delete" @click="del = true">Удалить заметку</button>
                <button class="button button-delete" @click="undo(todo.id)">Отмена действия</button>
                <button class="button button-delete" @click="reUndo(todo.id)">Повторить отмененное</button>
            </div>
            
        </div>
        <div class="modal-mask" v-if="del || back">
            <div class="modal-wrapper" v-if="del">
                УДАЛИТЬ ЭТУ ЗАМЕТКУ?
                <div class="modal-buttons">
                    <button class="button" @click="deleteTodo">Удалить</button>
                    <button class="button" @click="del = false">Отмена</button>
                </div>
            </div>
            <div class="modal-wrapper" v-if="back">
                ВЕРНУТЬСЯ НАЗАД?
                <div class="modal-buttons">
                    <router-link to="/" tag="button" class="button">Вернуться</router-link>
                    <button class="button" @click="back = false">Остаться</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            inputText: '',
            del: false,
            back: false,
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
                this.todo.actions.push({name: 'add', item: this.todo.items[this.todo.items.length-1]})
            }
            this.$store.commit('saveData')
        },
        saveRes: function () {
            this.$store.commit('saveData')
        },
        deleteItem: function(index) {
            this.todo.actions.push({name: 'delete', item: this.todo.items[index]})
            this.todo.items.splice(index, 1)
            
            this.$store.commit('saveData')
        },
        enableEdit: function(index) {
            this.todo.items[index].edit = true;
        },
        disableEdit: function(index) {
            this.todo.items[index].edit = false;
            this.$store.commit('saveData')
        },
        undo: function(id) {
            this.$store.commit('undo', id)
        },
        reUndo: function(id) {
            return id
        },
        deleteTodo: function(){
            this.$router.push('/')
            this.$store.commit('delete', this.url+1)
            this.del = false
        }
    }
}
</script>

<style>

</style>