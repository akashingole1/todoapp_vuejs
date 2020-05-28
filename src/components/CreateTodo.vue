<template>
  <div class="mb-3">
    <button class="btn btn-primary mb-3" v-on:click="openForm">+</button>
    <form class="detail-box" v-show="isOpen">
      <div class="form-group">
        <label>Title</label>
        <input class="form-control" type="text" v-model="title" />
      </div>
      <div>
        <label>Info</label>
        <input class="form-control" type="text" v-model="info" />
      </div>
      <div>
        <button type="button" class="btn btn-primary mt-3" v-on:click="sendForm">Create</button>
        <button type="button" class="btn btn-danger mt-3" v-on:click="closeForm">Cancel</button>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  app: "CreateTodo",
  data() {
    return {
      title: "",
      info: "",
      isOpen: false
    };
  },
  methods: {
    openForm() {
      this.isOpen = true;
    },
    closeForm() {
      this.isOpen = false;
    },
    sendForm() {
      if (this.title != "" && this.info != "") {
        const title = this.title;
        const info = this.info;
        this.$emit("create-todo", {
          title: title,
          info: info,
          done: false
        });
        this.title = "";
        this.info = "";
        this.isOpen = false;
      }
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
  height: 250px;
  margin: 0 auto;
}
</style>
