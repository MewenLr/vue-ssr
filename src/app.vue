<template>
  <div id="app" class="app">
    Here in app component
    <hello />
    <p>
      <router-link to="/">Go To Home</router-link>
      <router-link to="/about">Go To About</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import Hello from '@/components/hello.vue'

export default {
  name: 'App',
  components: {
    Hello,
  },
  mounted() {
    console.log('App mounted')
  },
}
</script>

<style>
.app {
  width: 500px;
  height: 500px;
  background-color: lightblue;
}
</style>
