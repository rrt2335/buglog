<template>
  <div class="home">
    <h1>Bug Log</h1>
    <router-link to="/info">Go to info page</router-link>
    <form>
      <div class="form-group text-left m-3">
        <label for="exampleInputEmail1">Which bug is giving you problems?</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
          placeholder="Enter email">
      </div>
      <div class="form-group text-left m-3">
        <label for="exampleInputPassword1">Write your name below:</label>
        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Name...">
      </div>
      <div class="form-group text-left m-3">
        <label for="exampleInputPassword1">Please give a detailed description of your bug:</label>
        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Description...">
      </div>
      <button type="submit" class="btn btn-warning shadow">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {

    }
  }
</script>