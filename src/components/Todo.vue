<template>
  <div>
    <form class="detail-box mb-3">
      <div class="text">
        <h4>Title: {{ todo.title }}</h4>
        <h5>Info: {{ todo.info }}</h5>
      </div>

      <div>
        <button
          type="button"
          class="btn btn-primary mt-3"
          v-on:click="completeTodo(todo)"
          v-show="!todo.done"
        >Pending</button>
        <button type="button" class="btn btn-success mt-3" v-show="todo.done">Completed</button>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  app: "Todo",
  props: ["todo"],
  methods: {
    completeTodo(todo) {
      this.$emit("complete-todo", todo);
    }
  }
};
</script>

<style scoped>
input[type="text"] {
  margin: 0 auto;
  width: 80%;
}
.detail-box {
  padding: 5px;
  border: 1px solid lightgrey;
  width: 300px;
  height: 155px;
  margin: 0 auto;
}
.text {
  text-align: left;
  padding: 5px;
}
</style>
