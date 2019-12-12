<template>
  <div class="recommend">
      <p class="title">热门推荐</p>
      <ul>
          <li class="item" v-for="(item, index) in list" :key=index>
              <router-link :to="/detail/+item.id">
                <img class="image" :src=item.imgUrl >
              </router-link>
            <div class="desc">
                <p class="desc-title">
                    {{item.title}}
                </p>
                <p class="desc-desc">
                    {{item.desc}}
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
    name: 'HomeRecommend',
    props: {
      list: Array
    },
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