<template>
  <div class="header">
      <div class="header-left">&lt;</div>
      <div class="header-mid">
          <div class="header-mid-text">奶爸旅游季 游乐园走起</div>
      </div>
      <router-link to="/city">
        <div class="header-right">
            {{city}}
            <div class="header-right-arrow"></div>
        </div>
      </router-link>
  </div>
</template>

<script>
export default {
    name: 'HomeHeader',
    props: {
        city: String
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
    .header
        display flex
        height 48px
        background-color $bgColor
        font-size 16px
        text-align center
        line-height 48px
        color white
        .header-left
            width: 0.727rem
            height 48px
        .header-mid
            flex 1
            min-width 0
            display flex
            align-items center
            .header-mid-text
                flex 1
                padding-left .4rem
                line-height 30px
                background-color #fff
                color lightgrey
                text-align left
                border-radius .06rem
        .header-right
            width: 1.324rem
            height 48px
            line-height 48px
            color #fff
            .header-right-arrow
                display inline-block
                vertical-align middle
                width 0
                height 0
                border 6px solid transparent
                border-top 6px solid #fff
                border-bottom none
</style>