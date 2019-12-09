<template>
  <div class="alphabet">
      <ul class="list">
          <li class="item" v-for="(item, key) in list" :key=key>{{key}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        list: Object
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
    .list
        display flex
        position fixed
        right 0
        top 85px
        width .4rem
        bottom 0
        flex-direction column
        justify-content center
        .item
            text-align center
            line-height .32rem
            color $bgColor
</style>