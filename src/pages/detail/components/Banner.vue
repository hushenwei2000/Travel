<template>
    <div>
        <div class="banner">
            <div class="img-wrapper" @click="handleBannerClick">
                <img src="https://img1.qunarzz.com/p/tts3/1806/5d/5096a14841cda02.jpg_r_640x420x90_e5f4d61f.jpg" />
            </div>
            <div class="info">
                <p class="info-left">产品编号 2848621660</p>
                <p class="info-right">1/7</p>
            </div>
        </div>
        <gallery @galleryClick="handleGalleryClick" v-show="showGallery"></gallery>
    </div>
</template>

<script>
import Gallery from 'common/gallery/Gallery'

export default {
    name: 'DetailBanner',
    components: {
        Gallery
    },
    data() {
        return {
            showGallery: false
        }
    },
    methods: {        
        handleGalleryClick() {
            this.showGallery = false
        },
        handleBannerClick() {
            this.showGallery = true
        }
    }
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        .img-wrapper
            width 100%
            height 66vw
            img
                width 100%
        .info
            position absolute
            left 0
            right 0
            bottom 0
            padding 0 .3rem
            display flex
            justify-content space-between
            line-height 1rem
            color #fff
            background-image -webkit-linear-gradient(transparent 0,rgba(0,0,0,0.8) 85%)
</style>