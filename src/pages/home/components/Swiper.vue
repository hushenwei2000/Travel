<template>
    <div class="swiper-wrapper">
        <swiper :options="swiperOption">
          <!-- slides -->
          <swiper-slide>
              <img class="swiper-img" 
              v-for="(item, index) in list"
              :src=item.imgUrl
              :key=index />
          </swiper-slide>
          <!-- Optional controls -->
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
    .swiper-wrapper
        width 100%
        height 30vw
        background-color lightgrey
        .swiper-img
            width 100%
        
</style>