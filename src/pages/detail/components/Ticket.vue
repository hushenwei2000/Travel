<template>
  <div class="ticket">
      <div class="copyNav nav" v-show="showCopyNav"></div>
      <div class="nav" :style="fixedStyle">
        <span :class="{'active': showContent == 'ticket'}">门票</span>
        <span :class="{'active': showContent == 'trip'}">一日游</span>
        <span :class="{'active': showContent == 'service'}">景区服务</span>
      </div>
      <div class="margin"></div>
      <div class="title" ref="ticket"><i></i>门票</div>
      <detail-list :list="ticketList" @changeShowChildren="updateHeight"></detail-list>
      <div class="margin" ref="trip"></div>
      <div class="title"><i></i>一日游</div>
      <detail-list :list="tripList" @changeShowChildren="updateHeight"></detail-list>
      <div class="margin" ref="service"></div>
      <div class="title"><i></i>景区服务</div>
      <detail-list :list="serviceList" @changeShowChildren="updateHeight"></detail-list>
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
          fixedStyle: {},
          ticketHeight: 0,
          tripHeight: 0,
          serviceHeight: 0,
          showContent: ''
        }
    },
    computed:{
      showCopyNav() {
        return this.fixedStyle['top']
      }
    },
    methods: {
        handleScroll() {
            const top= window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            console.log("滑动到" + top)
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
            if(top < this.tripHeight){
              this.showContent = 'ticket'
            }else if(top < this.serviceHeight){
              this.showContent = 'trip'
            }else{
              this.showContent = 'service'
            }
        },
        updateHeight() {
          setTimeout(() => {
            this.ticketHeight = this.$refs.ticket.offsetTop - 87.5
            this.tripHeight = this.$refs.trip.offsetTop - 87.5
            this.serviceHeight = this.$refs.service.offsetTop - 87.5
            console.log("高度分别是"+this.ticketHeight+","+this.tripHeight+","+this.serviceHeight);
          }, 500)
          
        }
    },
    activated() {
        window.addEventListener('scroll', this.handleScroll)
        this.updateHeight()
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