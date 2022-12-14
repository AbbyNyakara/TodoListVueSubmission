<template>
  <div class="todo_list">
    <div class="input__section">
      <input type="text" placeholder="Create a new todo"
       :class="[store.mode ? 'todo_input-light' : 'todo_input-dark' ]"
      v-model="newTodo" @keyup.enter="addTodo">
    </div>
    <div :class="[store.mode ? 'todo_items-light' : 'todo_items-dark']">
      <TodoItem v-for="(todo, index) in filteredTodos" :key="todo.id" class="todo_item"
       :todo="todo" :index="index" @deletedTodo="deleteTodo" @markCompleted="markCompleted">
      </TodoItem>

      <div class="footer_container">
        <div class="items_left">
          <div>{{itemsLeft}} items left</div>
        </div>

        <div class="filters-desktop">
          <p :class="{ active : filter == 'all' }"  @click="filter='all'">All</p>
          <p  :class="{ active : filter == 'active' }"  @click="filter='active'">Active</p>
          <p  :class="{ active : filter == 'completed' }"  @click="filter='completed'">Completed</p>
        </div>

        <div class="clear_completed">
          <button @click="deleteCompleted"
          :class="[store.mode ? 'clear_btn-light' : 'clear_btn-dark']">
          Clear Completed</button>
        </div>
      </div>
    </div>
  </div>

  <div :class="[store.mode ? 'filter_mobile-light' : 'filter_mobile']" >
     <p :class="{ active : filter == 'all' }"  @click="filter='all'">All</p>
     <p  :class="{ active : filter == 'active' }"  @click="filter='active'">Active</p>
     <p  :class="{ active : filter == 'completed' }"  @click="filter='completed'">Completed</p>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';
import { store } from '../store';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  data() {
    return {
      newTodo: '',
      idForTodo: 5,
      filter: 'all',
      store,
      todos: [
        {
          item: 'Complete online JavaScript course',
          completed: false,
          id: 1,
        },
        {
          item: 'Jog around the park 3x',
          completed: false,
          id: 2,
        },
        {
          item: '10 minutes meditation',
          completed: false,
          id: 3,
        },
        {
          item: 'Read for 1 hour',
          completed: false,
          id: 4,
        },
      ],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length === 0) {
        alert('Todo Item cannot be empty');
        return;
      }

      this.todos.push({
        id: this.idForTodo,
        item: this.newTodo,
        completed: false,
      });

      this.newTodo = '';
      // eslint-disable-next-line no-plusplus
      this.idForTodo++;
    },

    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
    deleteCompleted() {
      this.todos = this.todos.filter((todo) => !todo.completed);
    },
    markCompleted(data) {
      this.todos.splice(data.index, 1, data.todo);
    },
  },
  computed: {
    itemsLeft() {
      return this.todos.filter((todo) => !todo.completed).length;
    },
    filteredTodos() {
      if (this.filter === 'all') {
        return this.todos;
      } if (this.filter === 'active') {
        return this.todos.filter((todo) => !todo.completed);
      } if (this.filter === 'completed') {
        return this.todos.filter((todo) => todo.completed);
      }

      return this.todos;
    },
  },
};
</script>

<style scoped>
  .todo_list {
    margin-top: 2rem;
  }

  .todo_input-dark {
    padding: 20px 10px;
    width: 100%;
    font-size: 1rem;
    background-color: hsl(235, 24%, 19%);
    border: none;
    outline: none;
    color: hsl(234, 39%, 85%);
    border-radius: 5px;
  }

  .todo_input-light {
    padding: 20px 10px;
    width: 100%;
    font-size: 1rem;
    background-color: hsl(0, 0%, 98%);
    border: none;
    outline: none;
    color: hsl(235, 19%, 35%);
    border-radius: 5px;
  }

  .todo_items-dark {
    margin-top: 2rem;
    background-color: hsl(235, 24%, 19%);
    color: hsl(234, 39%, 85%);
    border: none;
    border-radius: 5px;
  }

  .todo_items-light {
    margin-top: 2rem;
    background-color: hsl(0, 0%, 98%);
    color: hsl(235, 19%, 35%);
    border: none;
    border-radius: 5px;
    box-shadow: 5px 2px 12px hsl(235, 19%, 35%);
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

  .filters-desktop {
    display: flex;
  }

  .filters-desktop> p {
    cursor: pointer;
    font-size: 14px;
    appearance: none;
    padding: 5px;
    border: none;
    outline: none;
  }

  .active {
    color: hsl(192, 100%, 67%);
  }

  .clear_btn-dark {
    border: none;
    outline: none;
    background: transparent;
    color: hsl(234, 39%, 85%);
    cursor: pointer;
  }

  .clear_btn-light {
    border: none;
    outline: none;
    background: transparent;
    color: hsl(235, 19%, 35%);
    cursor: pointer;
  }

  .filter_mobile,
  .filter_mobile-light {
    display: none;
  }

  @media screen and (max-width: 375px){
    .filter_mobile {
      display: flex;
      background-color: hsl(235, 24%, 19%);
      margin-top: 1rem;
      padding: 1rem;
      border: none;
      border-radius: 5px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-size: 14px;
    }

    .filter_mobile-light {
      display: flex;
      background-color: hsl(0, 0%, 98%);
      color: hsl(235, 19%, 35%);
      margin-top: 1rem;
      padding: 1rem;
      border: none;
      border-radius: 5px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      box-shadow: 5px 2px 12px hsl(235, 19%, 35%);
    }

    .filter_mobile> p {
    cursor: pointer;
    }

    .filters-desktop {
      display: none;
    }
  }
</style>
