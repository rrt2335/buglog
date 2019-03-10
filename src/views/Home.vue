<template>
  <div class="home container-fluid">
    <!-- <router-link to="/info">Go to info page</router-link> -->
    <!-- Input form below -->
    <form @submit.prevent="makeBug">
      <div class="form-group text-left">
        <label>Which bug is giving you problems?</label>
        <input v-model="newBug.title" type="text" class="form-control shadow" id="exampleInput1"
          placeholder="Name of bug..." required>
      </div>
      <div class="form-group text-left">
        <label>Please give a detailed description of your bug:</label>
        <input v-model="newBug.description" type="text" class="form-control shadow" id="exampleInput2"
          placeholder="Description..." required>
      </div>
      <div class="form-group text-left">
        <label>Write your name below:</label>
        <input v-model="newBug.creator" type="text" class="form-control shadow" id="exampleInput3" placeholder="Name..."
          required>
      </div>
      <button type="submit" class="btn btn-warning shadow m-2">Submit</button>
      <button type="reset" class="btn btn-outline-warning shadow m-2">Clear</button>
    </form>
    <bugs></bugs>
  </div>
</template>

<script>
  import Bugs from '@/components/Bugs.vue'
  import Notes from '@/components/Notes.vue'
  export default {
    name: 'Home',
    mounted() {
      this.$store.dispatch('getBugs')
    },
    data() {
      return {
        newBug: {
          creator: "",
          description: "",
          title: ""
        }
      }
    },
    computed: {
      bugs() {
        return this.$store.state.bugs
      }
    },
    methods: {
      makeBug() {
        console.log(this.newBug)
        this.$store.dispatch("addBug", this.newBug);
      }
    },
    components: {
      Bugs,
      Notes
    }
  }
</script>

<style>
  label {
    color: white;
    text-shadow: 0 2px 0 black;
  }

#exampleInput2 {
  height: 75px;
}

</style>