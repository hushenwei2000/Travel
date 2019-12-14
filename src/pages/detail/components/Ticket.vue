<template>
  <div class="ticket">
      <div class="copyNav nav" v-show="showCopyNav"></div>
      <div class="nav" :style="fixedStyle">
        <span class="active">门票</span><span>一日游</span><span>景区服务</span>
      </div>
      <div class="margin"></div>
      <div class="title"><i></i>门票</div>
      <detail-list :list="ticketList"></detail-list>
      <div class="margin"></div>
      <div class="title"><i></i>一日游</div>
      <detail-list :list="tripList"></detail-list>
      <div class="margin"></div>
      <div class="title"><i></i>景区服务</div>
      <detail-list :list="serviceList"></detail-list>
  </div>
</template>

<script>
import DetailList from './List.vue'

export default {
    name: 'DetailTicket',
    components: {
      DetailList
    },
    props:{
      ticketList: Array,
      serviceList: Array,
      tripList: Array
    },
    data() {
        return{
          isFixed: false,
          fixedStyle: {}
        }
    },
    computed:{
      showCopyNav() {
        return this.fixedStyle['top']
      }
    },
    methods: {
        handleScroll() {
            const top = document.documentElement.scrollTop
            if(top >= 180){
              this.fixedStyle = {
                position: 'fixed',
                top: '45px',
                left: '0',
                right: '0',
                'z-index': '1'
              }
            }else{
              this.fixedStyle = {}
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
  .ticket
    margin-top 20px
    background-color #fff
    .nav
      height .85rem
      display flex
      line-height .85rem
      text-align center
      font-size .32rem
      background-color #fff
      span
        display block
        flex 1
      .active
        border-bottom 2px solid $bgColor
    .margin
      height 10px
      background-color $greyBg
    .title
      height .8rem
      padding-left .2rem
      line-height .8rem
      font-size .32rem
      background-color #fff
      i
        display: inline-block;
        width: .36rem;
        height: .36rem;
        vertical-align middle
        background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        margin-right: .1rem;
        background-size: .4rem 3rem;
</style>