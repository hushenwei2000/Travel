<template>
  <div class="recommend">
      <p class="title">热门推荐</p>
      <ul>
          <li class="item">
              <img class="image" src="https://imgs.qunarzz.com/p/tts3/1806/5d/5096a14841cda02.jpg_r_480x320x90_f7614f81.jpg" alt="">
            <div class="desc">
                <p class="desc-title">
                    成都-普吉岛 6天跟团游
                </p>
                <p class="desc-desc">
                    错峰特惠丨直飞普吉岛，泰式精品泳池酒店，赠送人妖表演，浮潜，泰式按摩
                </p>
                <p class="desc-price">
                    <span class="desc-price-num">￥1500</span>起
                </p>
            </div>
          </li>
          <li class="item">
              <img class="image" src="https://imgs.qunarzz.com/p/tts3/1806/5d/5096a14841cda02.jpg_r_480x320x90_f7614f81.jpg" alt="">
            <div class="desc">
                <p class="desc-title">
                    成都-普吉岛 6天跟团游
                </p>
                <p class="desc-desc">
                    错峰特惠丨直飞普吉岛，泰式精品泳池酒店，赠送人妖表演，浮潜，泰式按摩
                </p>
                <p class="desc-price">
                    <span class="desc-price-num">￥1500</span>起
                </p>
            </div>
          </li>
          <li class="item">
              <img class="image" src="https://imgs.qunarzz.com/p/tts3/1806/5d/5096a14841cda02.jpg_r_480x320x90_f7614f81.jpg" alt="">
            <div class="desc">
                <p class="desc-title">
                    成都-普吉岛 6天跟团游
                </p>
                <p class="desc-desc">
                    错峰特惠丨直飞普吉岛，泰式精品泳池酒店，赠送人妖表演，浮潜，泰式按摩
                </p>
                <p class="desc-price">
                    <span class="desc-price-num">￥1500</span>起
                </p>
            </div>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    name: 'HomeRecommend'
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixin.styl';
    .title
        title()
    .item
        height 1.9rem
        display flex
        align-items center
        .image
            display block
            height 1.7rem
            margin-right .2rem
        .desc
            flex 1
            min-width 0
            color #000
            .desc-title
                font-size .32rem
            .desc-desc
                ellipsis()
                line-height .6rem
            .desc-price-num
                font-size .32rem
                margin-right .1rem
                color $priceColor
</style>