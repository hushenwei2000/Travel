<template>
  <div class="header">
      <div class="header-top">
          <router-link to="/">
            <div class="header-back">&lt;</div>
          </router-link>
          <div class="header-btn btn-active">国内</div>
          <div class="header-btn">国际/港澳台</div>
      </div>
      
  </div>
</template>

<script>
export default {
    name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
    .header
        background-color $bgColor
        .header-top
            position relative
            display flex
            height 45px
            justify-content center
            align-items center
            .header-back
                position absolute
                left 0
                top 0
                width: 0.727rem
                height 45px
                line-height 45px
                font-size .32rem
                text-align center
                color white
            .header-btn
                border 1px solid white
                width 24%
                height 26px
                line-height 26px
                text-align center
                background-color white
                color $bgColor
            .btn-active
                border 1px solid white
                background-color $bgColor
                color white
        

</style>