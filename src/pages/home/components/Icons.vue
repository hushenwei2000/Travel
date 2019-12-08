<template>
  <div class="icons">
        <swiper :options="swiperOption">
          <swiper-slide>
                <div class="icon">
                  <img src="https://s.qunarzz.com/homenode/images/touchheader/piao.png" alt="" class="icon-img">
                  <p class="desc">火车票</p>
                </div>
                <div class="icon">
                  <img src="https://s.qunarzz.com/homenode/images/touchheader/piao.png" alt="" class="icon-img">
                  <p class="desc">火车票</p>
                </div><div class="icon">
                  <img src="https://s.qunarzz.com/homenode/images/touchheader/piao.png" alt="" class="icon-img">
                  <p class="desc">火车票</p>
                </div><div class="icon">
                  <img src="https://s.qunarzz.com/homenode/images/touchheader/piao.png" alt="" class="icon-img">
                  <p class="desc">火车票</p>
                </div>
                <div class="icon">
                  <img src="https://s.qunarzz.com/homenode/images/touchheader/piao.png" alt="" class="icon-img">
                  <p class="desc">火车票</p>
                </div>
                <div class="icon">
                  <img src="https://s.qunarzz.com/homenode/images/touchheader/piao.png" alt="" class="icon-img">
                  <p class="desc">火车票</p>
                </div>
                <div class="icon">
                  <img src="https://s.qunarzz.com/homenode/images/touchheader/piao.png" alt="" class="icon-img">
                  <p class="desc">火车票</p>
                </div>
                <div class="icon">
                  <img src="https://s.qunarzz.com/homenode/images/touchheader/piao.png" alt="" class="icon-img">
                  <p class="desc">火车票</p>
                </div>
          </swiper-slide>
          <swiper-slide>
                <div class="icon">
                  <img src="https://s.qunarzz.com/homenode/images/touchheader/piao.png" alt="" class="icon-img">
                  <p class="desc">火车票</p>
                </div>
          </swiper-slide>
        </swiper>
        
  </div>
</template>

<script>
export default {
    name: 'HomeIcons',
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
          pagination: {
              el: '.swiper-pagination'
          },
          autoplay: true,
          loop: true
        },
        swiperList: []
      }
    }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';
@import '~styles/mixin.styl';
    .icons
        overflow hidden
        width 100%
        height 50vw
        .icon
            display flex
            float left
            width 25%
            height 25vw
            flex-direction column
            align-items center
            justify-content center
            .icon-img
              width 55%
              height 100vm
              display block
              margin-bottom .15rem
            .desc
              width 100%
              text-align center
              color $darkTextColor
              ellipsis()
</style>