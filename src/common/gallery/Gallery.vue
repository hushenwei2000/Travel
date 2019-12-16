<template>
  <div class="gallery" @click="handleGalleryClick">
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in list" :key="index">
                <img class="swiper-img" :src=item />
            </swiper-slide> 
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CommonGallery',
    props:{
        list: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: {
              el: '.swiper-pagination',
              type: 'fraction'
          },
          observer:true,
          observeParents:true,
        }
      }
    },
    methods: {
        handleGalleryClick(e) {
            if(e.target.nodeName.toUpperCase() != 'IMG'){
                this.$emit('galleryClick')
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .gallery >>> .swiper-container
        overflow inherit
    .gallery
        position absolute
        z-index 99
        display flex
        top 0
        bottom 0
        left 0
        right 0
        background-color #000
        flex-direction column
        justify-content center
        .wrapper
            width 100%
            height 67vw
            img
                width 100%
            .swiper-pagination
                color #fff
                bottom -1rem
</style>