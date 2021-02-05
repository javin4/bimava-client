<template>
  <div class="create">
      <h3>Add Project</h3>
      <div class="add">
          <form @submit="onSubmit">
              <div class="form-group">
                <label class="font-bold mb-2" for="name">Title</label>
                <input type="text" v-model="name" placeholder="Projektname...">
              </div>
              <div class="form-group">
                <label class="font-bold mb-2" for="kennung">Kennung</label>
                <input type="text" v-model="kennung" placeholder="Kennung...">
              </div>
              <div class="form-group">
                <input type="submit" value="Submit">
              </div>
          </form>
      </div>

      name:{{name}} <br>
      kennung {{kennung }}<br>

    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      name: 'test',
      kennung: 'test',
      }
  },
  methods: {
      ...mapActions(['addProject']),
      onSubmit(e) {
          e.preventDefault();
          console.log("test");
          this.addProject({
              name:this.name, 
              kennung:this.kennung
              });
      }
  } // end methods
} // end export
</script>

<style scoped>
  .form-group {
    margin-bottom: 10px;
    margin-left: 10px;
  }
  input[type="text"], textarea {
    padding: 2px 2px;
    border: 1px solid lightgray;
    border-radius: 5px;
  }
  label {
    display: block;
  }
  button {
    padding: 16px;
    background: #027BFF;
    color: white;
    border-radius: 5px;
    font-size: 16px;
  }
</style>