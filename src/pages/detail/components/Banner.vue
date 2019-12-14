<template>
    <div>
        <div class="banner">
            <div class="img-wrapper" @click="handleBannerClick">
                <img :src=bannerImg />
            </div>
            <div class="info">
                <p class="info-left">{{sightName}}</p>
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
    props:{
        bannerImg: String,
        sightName: String
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
            height 56vw
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