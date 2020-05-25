<template>
  <div>
    <Todo v-on:complete-todo="completeTodo" v-for="todo in todos" :key="todo.id" :todo.sync="todo" />
  </div>
</template>

<script>
/* eslint-disable */
import Todo from "./Todo";

export default {
  app: "TodoList",
  props: ["todos"],
  components: { Todo },
  methods: {
    completeTodo(todo) {
      let index = this.todos.indexOf(todo);
      this.todos[index]["done"] = true;
    }
  }
};
</script>
