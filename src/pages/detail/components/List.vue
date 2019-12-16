<template>
  <div class="list">
    <div class="item" v-for="(item, index) of list" :key="index">
        <div class="item-body">
            <h5>{{item.title}}<span>{{item.desc}}</span></h5>
            <p class="buy"><span>￥78</span>起</p>
            <div v-if="item.children" class="open" @click="handleOpenClick(index)">&lt;</div>
        </div>
        <slide> 
            <div v-if="item.children" class="item-child" v-show="showChildren(index)">
                <detail-list  :list="item.children"></detail-list>
            </div>
        </slide>
    </div>
  </div>
</template>

<script>
import DetailList from './List'
import Slide from '../../../common/slide/Slide'
export default {
    name: 'DetailList',
    data() {
        return {
            showIndex: []
        }
    },
    components: {
        DetailList,
        Slide
    },
    props: {
        list: Array
    },
    methods: {
        handleOpenClick(index) {
            for(let i = 0, length = this.showIndex.length; i < length; i++){
                if(this.showIndex[i] == index){
                    this.showIndex.splice(i, 1)
                    this.$emit("changeShowChildren")
                    return
                }
            }
            this.showIndex.push(index)
            this.$emit("changeShowChildren")
        },
        showChildren(index) {
            for(let i = 0, length = this.showIndex.length; i < length; i++){
                if(this.showIndex[i] == index){
                    return true
                }
            }
            return false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixin.styl';
    .list
        .item-body
            position relative
            display flex
            height 1.2rem
            padding .2rem
            overflow hidden
            align-items center
            h5
                height 1rem
                overflow hidden
                text-overflow ellipsis
                -webkit-line-clamp 2
                -webkit-box-orient vertical
                margin-right 1.8rem
                color #333
                font-size .3rem
                line-height .48rem
                span
                    margin-left .1rem
                    font-size .24rem
                    color #888
            .buy
                position absolute
                right .46rem
                height 1rem
                line-height 1rem
                span 
                    color #ff9800
                    font-size .4rem
            .open
                position absolute
                right .1rem
                height 1rem
                line-height 1rem
                text-align center
                transform rotate(-90deg)
        .item-child
            background-color $greyBg
            overflow hidden
    
</style>