<template>
  <div class="icons">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(eachPage, index) in pages" :key=index>
                <div class="icon" v-for="(item, index) in eachPage" :key="index">
                  <img :src=item.imgUrl class="icon-img">
                  <p class="desc">{{item.desc}}</p>
                </div>
          </swiper-slide>
        </swiper>
        
  </div>
</template>

<script>
export default {
    name: 'HomeIcons',
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
        }
      }
    },
    computed: {
      pages() {
        const pages = []
        if(this.list.length){
          for(let i = 0, length = this.list.length; i < length; i++){
            let index = Math.floor(i / 8)
            if(!pages[index]){
              pages[index] = []
            }
            pages[index].push(this.list[i])
          }
        }
        return pages
      }
    }
    
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl';
@import '~styles/mixin.styl';
    .icons
        margin .1rem 0
        overflow hidden
        width 100%
        height 50vw
        .icon
            display flex
            float left
            width 25%
            height 25vw
            flex-direction column
            align-items center
            justify-content center
            .icon-img
              width 55%
              height 100vm
              display block
              margin-bottom .15rem
            .desc
              width 100%
              text-align center
              color $darkTextColor
              ellipsis()
</style>