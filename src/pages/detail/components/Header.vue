<template>
<div class="header">
    <div class="header-abs" v-show="showAbs">
          <router-link 
          to="/" 
          tag="p"
            class="back">
           &lt;
          </router-link>
          <p class="like">更多</p>
          <p class="more">喜欢</p>
    </div>
    <div class="header-fixed" :style="fixedStyle" v-show="!showAbs">
        景点详情
    </div>
</div>
</template>

<script>
export default {
    name: 'DetailHeader',
    data() {
        return {
            showAbs: true,
            fixedStyle: {
                opacity: 0
            }
        }
    },
    methods: {
        handleScroll() {
            const top = document.documentElement.scrollTop
            let opa = 0
            if(top > 0){
                this.showAbs = false
                if(top < 140){
                    this.showAbs = false
                    opa = top / 140
                }else if(top >= 140){
                    this.showAbs = false
                    opa = 1
                }
            }else{
                this.showAbs = true
            }
            this.fixedStyle = {
                opacity: opa
            }
        }
    },
    activated() {
        window.addEventListener('scroll', this.handleScroll)
    },
    deactivated() {
        window.removeEventListener('scroll', this.handleScroll)
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
    .header-abs
        position fixed
        z-index 1
        top 0
        left 0
        right 0
        p
            line-height .8rem
            width .8rem
            height .8rem
            text-align center
            background-color rgba(0, 0, 0, .6)
            border-radius 50%
            color #fff
        .back
            float left
        .more, .like
            float right 
    .header-fixed
        position fixed
        z-index 1
        top 0
        left 0
        right 0
        text-align center
        background-color $bgColor
        height 45px
        line-height 45px
        color white
</style>