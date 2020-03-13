<template lang="pug">
  #app.app
    img(src="@/assets/images/vue.png" height="50px" width="50px")
    | Here in app component with stCount prefetch : {{ stCount }}
    hello
    p
      router-link(to="/") Go to Home
      router-link(to="/about") Go to About
    router-view
    lazy-img
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Hello from '@/components/hello.vue'
import LazyImg from '@/components/lazy-img.vue'

export default {
  name: 'App',
  components: {
    Hello,
    LazyImg,
  },
  computed: {
    ...mapState({
      stCount: (state) => state.stCount, // prefetch in server *
      stTestClient: (state) => state.stTestClient, // fetch in browser
    }),
  },
  serverPrefetch() { // * prefetch before rendering
    return this.actIncCount()
  },
  mounted() {
    // execute action if server error
    // or allow DevServer to simulate serverPrefetch
    if (!this.stCount) this.actIncCount()
  },
  methods: {
    ...mapActions({
      actIncCount: 'actIncCount',
    }),
  },
}
</script>

<style lang="sass">
.app
  width: 500px
  height: 200vh
  background-color: lightblue
</style>
