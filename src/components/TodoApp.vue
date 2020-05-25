<template>
  <div>
    <h1>Todo App</h1>
    <TodoList v-bind:todos="todos" />
    <CreateTodo v-on:create-todo="createTodo" />
  </div>
</template>

<script>
/* eslint-disable */
import CreateTodo from "./CreateTodo";
import TodoList from "./TodoList";

export default {
  name: "TodoApp",
  components: {
    CreateTodo,
    TodoList
  },
  data() {
    return {
      todos: [
        {
          title: "Brush",
          info: "Brush teeth daily",
          done: false
        },
        {
          title: "Shower",
          info: "Shower daily",
          done: false
        }
      ]
    };
  },
  methods: {
    createTodo(newTodo) {
      this.todos.push(newTodo);
    }
  }
};
</script>
