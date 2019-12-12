<template>
  <div class="gallery" @click="handleGalleryClick">
    <div class="wrapper">
        <swiper :options="swiperOption">
            <swiper-slide>
                <img class="swiper-img" src="https://img1.qunarzz.com/p/tts3/1806/5d/5096a14841cda02.jpg_r_640x420x90_e5f4d61f.jpg" />
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="https://img1.qunarzz.com/p/tts3/1806/5d/5096a14841cda02.jpg_r_640x420x90_e5f4d61f.jpg" />
            </swiper-slide>
            <swiper-slide>
                <img class="swiper-img" src="https://img1.qunarzz.com/p/tts3/1806/5d/5096a14841cda02.jpg_r_640x420x90_e5f4d61f.jpg" />
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CommonGallery',
    data() {
      return {
        swiperOption: {
          // some swiper options/callbacks
          // 所有的参数同 swiper 官方 api 参数
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