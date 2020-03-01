<template>
  <div id="app" class="app">
    Here in app component
    <p>
      <router-link to="/">Go To Home</router-link>
      <router-link to="/about">Go To About</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
.app {
  width: 500px;
  height: 500px;
  background-color: lightblue;
}
</style>
