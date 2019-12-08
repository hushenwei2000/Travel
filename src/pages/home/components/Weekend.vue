<template>
  <div class="weekend">
      <p class="title">周末去哪儿</p>
      <ul>
          <li class="item" v-for="(item, index) in list" :key=index>
              <img class="image" src=item.imgUrl>
            <div class="desc">
                <p class="desc-title">
                    {{item.title}}
                </p>
                <p class="desc-desc">
                    {{item.desc}}
                </p>
            </div>
          </li>
          
      </ul>
  </div>
</template>

<script>
export default {
    name: 'HomeWeekend',
    props: {
        list: Array
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixin.styl';
    .title
        title()
    .item
        margin-bottom .1rem
        .image
            width 100%
            height 31.25vm
            margin-bottom .1rem
        .desc
            text-indent .2rem
            .desc-title
                font-size .32rem
                line-height .5rem
            .desc-desc
                ellipsis()
                line-height .5rem
                color $lightTextColor
</style>