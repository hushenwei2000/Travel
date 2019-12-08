<template>
  <div class="weekend">
      <p class="title">周末去哪儿</p>
      <ul>
          <li class="item">
              <img class="image" src="https://imgs.qunarzz.com/vc/de/3d/1c/2ea7755853fef62ce549153026.jpg_92.jpg" alt="">
            <div class="desc">
                <p class="desc-title">
                    成都-普吉岛 6天跟团游
                </p>
                <p class="desc-desc">
                    错峰特惠丨直飞普吉岛，泰式精品泳池酒店，赠送人妖表演，浮潜，泰式按摩
                </p>
            </div>
          </li>
          <li class="item">
              <img class="image" src="https://imgs.qunarzz.com/vc/de/3d/1c/2ea7755853fef62ce549153026.jpg_92.jpg" alt="">
            <div class="desc">
                <p class="desc-title">
                    成都-普吉岛 6天跟团游
                </p>
                <p class="desc-desc">
                    错峰特惠丨直飞普吉岛，泰式精品泳池酒店，赠送人妖表演，浮潜，泰式按摩
                </p>
            </div>
          </li>
          <li class="item">
              <img class="image" src="https://imgs.qunarzz.com/vc/de/3d/1c/2ea7755853fef62ce549153026.jpg_92.jpg" alt="">
            <div class="desc">
                <p class="desc-title">
                    成都-普吉岛 6天跟团游
                </p>
                <p class="desc-desc">
                    错峰特惠丨直飞普吉岛，泰式精品泳池酒店，赠送人妖表演，浮潜，泰式按摩
                </p>
            </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'HomeWeekend'
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