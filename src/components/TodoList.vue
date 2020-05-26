<template>
  <div>
    <h6>Completed Task: {{todos.filter(todo => todo.done === true).length}}</h6>
    <h6 class="mb-3">Pending Task: {{todos.filter(todo => todo.done === false).length}}</h6>
    <Todo
      v-on:delete-todo="deleteTodo"
      v-on:complete-todo="completeTodo"
      v-for="todo in todos"
      :key="todo.id"
      :todo.sync="todo"
    />
  </div>
</template>

<script>
/* eslint-disable */
import Todo from "./Todo";
import swal from "sweetalert";

export default {
  app: "TodoList",
  props: ["todos"],
  components: { Todo },
  methods: {
    completeTodo(todo) {
      let index = this.todos.indexOf(todo);
      this.todos[index]["done"] = true;
      swal("Good job!", "Todo Completed", "success");
    },
    deleteTodo(todo) {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this file!",
        icon: "warning",
        buttons: true,
        dangerMode: true
      }).then(res => {
        if (res) {
          let index = this.todos.indexOf(todo);
          this.todos.splice(index, 1);
          swal("Success", "Todo deleted successfully", "success");
        }
      });
    }
  }
};
</script>
<style scoped>
h6 {
  font-size: 18px;
}
</style>
