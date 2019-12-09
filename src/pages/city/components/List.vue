<template>
  <div class="list" ref="wrapper">
    <div>
        <div class="list-now">
            <p class="title">当前位置</p>
            <ul class="button-list">
                <li class="button-wrapper">
                    <div class="button">北京</div>
                </li>
            </ul>
        </div>
        <div class="list-hot">
            <p class="title">热门城市</p>
            <ul class="button-list">
                <template v-for="(item) in hotlist">
                   <li class="button-wrapper" :key=item.id>
                    <div class="button">{{item.name}}</div>
                    </li>
                </template>
                
            </ul>
        </div>
        <template v-for="(item, key) in alllist">
            <div class="list-all" :key=key :ref=key>
            <p class="title">{{key}}</p>
                <ul>
                    <li class="list-all-item" v-for="(eachCity) in item" :key=eachCity.id>{{eachCity.name}}</li>
                </ul>
        </div>
        </template>
        
        
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'CityList',
    props: {
        hotlist: Array,
        alllist: Object,
        letter: String
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {})
      })
    },
    watch: {
        letter() {
            if(this.letter){
                const ele = this.$refs[this.letter][0]
                this.scroll.scrollToElement(ele)
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixin.styl';
    .list
        position absolute
        left 0
        top 85px
        bottom 0
        width 100%
        overflow hidden
        .title
            title()
        .button-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem
            .button-wrapper
                float left
                display flex
                width 33%
                height 32px
                align-items center
                justify-content center
                .button
                    width 80%
                    height 22px
                    line-height 22px
                    text-align center
                    border .02rem solid #ccc
                    border-radius .05rem
        .list-all-item
            line-height .74rem
            padding-left .3rem
</style>