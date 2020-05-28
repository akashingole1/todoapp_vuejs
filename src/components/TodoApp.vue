<template>
  <div>
    <h2 style="text-decoration: underline">Vue.js Todo App</h2>
    <TodoList :key="shouldUpdate" />
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
      shouldUpdate: false
    };
  },
  methods: {
    createTodo(newTodo) {
      let todoArr = localStorage.hasOwnProperty("todos")
        ? JSON.parse(localStorage.getItem("todos"))
        : [];
      todoArr.push(newTodo);
      this.shouldUpdate = !this.shouldUpdate;
      localStorage.setItem("todos", JSON.stringify(todoArr));
    }
  }
};
</script>
