<template>
  <div class="search">
      <div class="input">
        <input type="text" placeholder="输入城市拼音、首字母" v-model="keyWord">
      </div>
      <div class="content" v-show="keyWord" ref="wrapper">
          <ul>
            <li v-for="(item, index) in result" :key=index>{{item}}</li>
            <li v-show="noResult">没有找到匹配数据</li>
          </ul>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name: 'CitySearch',
    props: {
        list: Object,
    },
    data() {
        return {
            keyWord: '',
            result: [],
            timer: null
        }
    },
    computed: {
        noResult() {
            return !this.result.length
        }
    },
    mounted() {
      this.$nextTick(() => {
        this.scroll = new BScroll(this.$refs.wrapper, {})
      })
    },
    watch: {
        keyWord() {
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
                const result = []
                for(let key in this.list){
                    this.list[key].forEach(ele => {
                        if(ele.spell.indexOf(this.keyWord) > -1 || ele.name.indexOf(this.keyWord) > -1){
                            result.push(ele.name)
                        }
                    });
                }
                //console.log(result);
                this.result = result
            }, 500);
            
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
    .search
        .input
            height 40px
            display flex
            align-items center
            justify-content center
            background-color $bgColor
            input
                width 90%
                padding-left .4rem
                line-height 30px
                background-color #fff
                color lightgrey
                text-align left
                border-radius .06rem
                color $lightTextColor
        .content
            position absolute
            overflow hidden
            z-index 99
            top 85px
            left 0
            right 0
            bottom 0
            background-color #fff
            li
                padding-left .4rem
                line-height 30px
                color: #666
</style>