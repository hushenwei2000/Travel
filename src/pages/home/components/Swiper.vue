<template>
    <div class="swiper-wrapper">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide>
              <img class="swiper-img" src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/76e68eda4ed089c0e5b0ce2367efe428.jpg" />
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
  </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
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

<style lang="stylus" scoped>
    .swiper-wrapper >>> .swiper-pagination-bullet-active
        background-color #fff
    .swiper-wrapper
        width 100%
        height 31.25vw
        background-color lightgrey
        .swiper-img
            width 100%
        
</style>