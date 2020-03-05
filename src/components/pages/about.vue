<template>
  <div class="about">Here in About component</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'About',
  computed: {
    ...mapState({
      stCount: (state) => state.stCount,
      stTestClient: (state) => state.stTestClient,
    }),
  },
  mounted() {
    this.actIncCount()
    console.log('here is prefetch stCount >>', this.stCount)
  },
  methods: {
    ...mapActions({
      actIncCount: 'actIncCount',
    }),
  },
}
</script>

<style>
.about {
  color: coral;
}
</style>
