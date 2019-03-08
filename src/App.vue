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
    background-color:rgb(97, 104, 104);
    
  }
  .title {
    text-shadow: 0 3px 7px black;
    color: gold;
    font-family: 'Courier';
    font-weight: bold;
    font-size: 52px;
  }
</style>