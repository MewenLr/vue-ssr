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
  },
  methods: {
    ...mapActions({
      actIncCount: 'actIncCount',
    }),
  },
}
</script>

<style lang="sass">
.about
  color: coral
</style>
