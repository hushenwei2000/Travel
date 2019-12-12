<template>
  <div class="header">
          <router-link 
          to="/" 
          tag="p"
            class="back">
           返回
          </router-link>
          <p class="like">更多</p>
          <p class="more">喜欢</p>
      </div>
</template>

<script>
export default {
    name: 'DetailHeader'
}
</script>

<style lang="stylus" scoped>
    .header
        position relative
        z-index 99
        position absolute
        top 0
        left 0
        right 0
        p
            line-height .8rem
            width .8rem
            height .8rem
            text-align center
            background-color rgba(0, 0, 0, .3)
            border-radius 50%
            color #fff
        .back
            float left
        .more, .like
            float right 
</style>