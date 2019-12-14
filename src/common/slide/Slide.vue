<template>
  <transition name="slide"> 
    <slot></slot>
  </transition>
</template>

<script>
export default {
    name: 'Slide'
}
</script>

<style lang="stylus" scoped>
    .slide-enter-active, .slide-leave-active
        transition all .4s
    .slide-enter, .slide-leave-to
        max-height 0
    .slide-enter-to, .slide-leave
        max-height 4rem
</style>