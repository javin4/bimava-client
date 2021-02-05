<template>
  <div class="create">
    test
 
    <ListItem
      v-for="(item, index) in todoItems"
      :key="index"
      :content="item"
      @toggleDone="checkItem(item.id)"
      @delete="deleteItem(item.id)"
    />


  <!--  test
    <div class="create container mt-12">
    <h1 class="mb-4">Neues Projekt Anlegen</h1>
    <form action="#" method="POST" @submit.prevent="addItem">
      <div class="form-group">
        <label class="font-bold mb-2" for="id">id</label>
        <input type="text" name="id" id="id" v-model="id">
      </div>
      <div class="form-group">
        <label class="font-bold mb-2" for="text">text</label>
        <input type="text" name="text" id="text" v-model="text">
      </div>

          <div class="form-group">
        <button type="submit">Add Item</button>
      </div>

    </form>
  </div>-->
     {{todoItems}}
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";
  import {
    todoItemsQuery,
    checkItemMutation,
    deleteItemMutation
  } from "@/graphql/queries.js";

export default {
  
  components: {
    ListItem
  },
  data () {
    return {
      id: null,
      text: null,
      done: null
    }
  },
  methods: {
    checkItem(id) {
      this.$apollo.mutate({
        mutation: checkItemMutation,
        variables: { id }
      });
    },
    deleteItem(id) {
        this.$apollo.mutate({
          mutation: deleteItemMutation,
          variables: { id }
        });
      }
  },
  apollo: {
    todoItems: {
      query: todoItemsQuery
    }
  }
}
</script>

<style>

</style>