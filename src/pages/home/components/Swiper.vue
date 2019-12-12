<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in list" :key=index>
          <img class="swiper-img" 
          :src=item.imgUrl />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
    name: 'HomeSwiper',
    props: {
      list: Array
    },
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
        }
      }
    }
    
}
</script>

<style lang="stylus" scoped>
    .swiper-wrapper >>> .swiper-pagination-bullet-active
        background-color #fff
    .wrapper
        width 100%
        height 30vw
        background-color lightgrey
        .swiper-img
            width 100%
        
</style>