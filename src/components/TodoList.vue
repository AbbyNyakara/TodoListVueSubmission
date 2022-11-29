<template>
  <div class="todo_list">
    <div class="input__section">
      <input type="text" placeholder="Create a new todo" class="todo_input"
      v-model="newTodo" @keyup.enter="addTodo">
    </div>
    
    <div class="todo_items">
      <TodoItem v-for="(todo, index) in filteredTodos" :key="todo.id" class="todo_item"
       :todo="todo" :index="index" @deletedTodo="deleteTodo" @markCompleted="markCompleted">
      </TodoItem>

      <div class="footer_container">
        <div class="items_left">
          <div>{{itemsLeft}} items left</div>
        </div>

        <div class="filters">
          <p :class="{ active : filter == 'all' }"  @click="filter='all'">All</p>
          <p  :class="{ active : filter == 'active' }"  @click="filter='active'">Active</p>
          <p  :class="{ active : filter == 'completed' }"  @click="filter='completed'">Completed</p>
        </div>

        <div class="clear_completed">
          <button @click="deleteCompleted" class="clear_btn" >Clear Completed</button>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
  import TodoItem from './TodoItem.vue'

  export default {
    name: "TodoList",
    components: {
      TodoItem
    },
    data () {
      return {
        newTodo: "",
        idForTodo: 5,
        filter: "all",
        todos: [
          {
            item: "Complete online JavaScript course",
            completed: false,
            id: 1,
          },
          {
            item: "Jog around the park 3x",
            completed: false,
            id: 2,
          },
          {
            item: "10 minutes meditation",
            completed: false,
            id: 3,
          },
          {
            item: "Read for 1 hour",
            completed: false,
            id: 4,
          }
        ]
      }
    },
    methods: {
      addTodo() {
        if (this.newTodo.trim().length == 0) {
          alert("Todo Item cannot be empty")
          return
        }

        this.todos.push({
          id: this.idForTodo,
          item: this.newTodo,
          completed: false
        })

        this.newTodo = ""
        this.idForTodo++
      },

      deleteTodo(index) {
        this.todos.splice(index, 1)
      },
      deleteCompleted() {
        this.todos = this.todos.filter(todo => !todo.completed)
      }, 
      markCompleted(data) {
        this.todos.splice(data.index, 1, data.todo)
      }
    },
    computed: {
      itemsLeft() {
        return this.todos.filter(todo => !todo.completed).length
      },
      filteredTodos() {
        if (this.filter == "all") {
          return this.todos
        } else if (this.filter == "active"){
          return this.todos.filter(todo => !todo.completed)
        }else if (this.filter == "completed"){
          return this.todos.filter(todo => todo.completed)
        }

        return this.todos
      }
    }
  }
</script>

<style scoped>
  .todo_list {
    margin-top: 2rem;
  }

  .todo_input {
    padding: 20px 10px;
    width: 100%;
    font-size: 1rem;
    background-color: hsl(235, 24%, 19%);
    border: none;
    outline: none;
    color: hsl(234, 39%, 85%);
    border-radius: 5px;
  }

  .todo_items {
    margin-top: 2rem;
    background-color: hsl(235, 24%, 19%);
    color: hsl(234, 39%, 85%);
    border: none;
    border-radius: 5px;
  }

  .todo_input::before {
    content: "";
    background: url("../assets/images/icon_circle.png");
    position: absolute;
    width: 20px;
    height: 20px;
    background-position: center;
    background-size: contain;
  }

  .footer_container {
    font-size: 0.9rem;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  }

  .filters {
    display: flex;
  }

  .filters> p {
    cursor: pointer; 
    font-size: 14px;
    background-color: hsl(235, 24%, 19%);
    appearance: none;
    padding: 5px;
    border: none;
    outline: none;
  }

  .active {
    color: hsl(192, 100%, 67%);
  }

  .clear_btn {
    border: none;
    outline: none;
    background: transparent;
    color: #fff;
    cursor: pointer;
  }

</style>