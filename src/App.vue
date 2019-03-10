<template>
  <div id="app">
    <h1 class="title">< bug-log ></h1>
    <router-view />
  </div>
</template>

<style>
  body {
    background-color:rgb(97, 104, 104);
  }
  
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-image: url("https://superdevresources.com/wp-content/uploads/2014/11/black-metal-grill-texture-vector.jpg");
    background-attachment: fixed;
    
  }
  .title {
    text-shadow: 0 3px 7px black;
    color: gold;
    font-family: 'Courier';
    font-weight: bold;
    font-size: 52px;
  }
</style>