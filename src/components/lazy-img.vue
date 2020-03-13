<template lang="pug">
  v-lazy-image.lazy-img(
    :src="require('@/assets/images/telescope.jpg')"
    :src-placeholder="require('@/assets/images/placeholder.png')"
  )
</template>

<script>
export default {
  name: 'LazyImg',
}
</script>

<style lang="sass">
.lazy-img
  width: 250px
  height: 150px
  margin-top: 100vh

.v-lazy-image
  opacity: 1

.v-lazy-image-loaded
  animation: lazy-img .5s linear forwards

@keyframes lazy-img
  from
    opacity: 0.5
  to
    opacity: 1
</style>
