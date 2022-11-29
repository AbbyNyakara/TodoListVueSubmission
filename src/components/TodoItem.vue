<template>
  <div class="todo_item">
      <div class="todo_label">
        <input type="checkbox" v-model="completed" class="checkbox" @change="markCompleted">
        <div class="todo_item-todo" :class="{completed : completed}">{{item}}</div>
      </div>
      <div class="delete_todo" @click="deleteTodo(index)">
        <img src="../assets/images/icon-cross.svg" alt="cross icon">
      </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: Object,
    index: Number,
  },
  data() {
    return {
      item: this.todo.item,
      id: this.todo.id,
      completed: this.todo.completed,
    };
  },
  methods: {
    deleteTodo(index) {
      this.$emit('deletedTodo', index);
    },
    markCompleted() {
      this.$emit('markCompleted', {
        index: this.index,
        todo: {
          item: this.item,
          id: this.id,
          completed: this.completed,
        },
      });
    },
  },
};
</script>

<style scoped>
  .todo_item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 0.3px solid  hsl(233, 14%, 35%);
    cursor: pointer;
  }

  .todo_label {
    display: flex;
  }

  input[type="checkbox"] {
  margin-right: 10px;
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background: none;
  border: none;
  }

  .delete_todo {
    cursor: pointer;
    font-size: 1.5rem;
  }

  .completed {
    text-decoration: line-through;
    color: grey;
  }

</style>
