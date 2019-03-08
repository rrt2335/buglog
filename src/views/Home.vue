<template>
  <div class="home">
    <router-link to="/info">Go to info page</router-link>
    <!-- Input form below -->
    <form>
      <div class="form-group text-left m-3">
        <label>Which bug is giving you problems?</label>
        <input type="text" class="form-control shadow" id="exampleInputEmail1" aria-describedby="emailHelp"
          placeholder="Name of bug...">
      </div>
      <div class="form-group text-left m-3">
        <label>Please give a detailed description of your bug:</label>
        <input type="text" class="form-control shadow" id="exampleInputPassword1" placeholder="Description...">
      </div>
      <div class="form-group text-left m-3">
        <label>Write your name below:</label>
        <input type="text" class="form-control shadow" id="exampleInputPassword1" placeholder="Name...">
      </div>
      <button type="submit" class="btn btn-warning shadow m-1">Submit</button>
      <button type="reset" class="btn btn-outline-warning shadow m-1">Cancel</button>
    </form>
    <div class="card m-3 text-left">
      <div class="card-header">Title</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">(BUG NAME)</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    components: {

    }
  }
</script>

<style>
  label {
    color: white;
    text-shadow: 0 2px 0 black;
  }
</style>