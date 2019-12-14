<template>
    <div class="alphabet">
  <ul ref="list"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">
      <li class="item" 
        v-for="(item, key) in letters" 
        :key=key
        @click="handleLetterClick"
        
        >{{item}}</li>
  </ul>
  <div class="mask" v-show="showMask && letter">{{letter}}</div>
  </div>
</template>

<script>
export default {
    name: 'CityAlphabet',
    props: {
        list: Object,
    },
    data() {
        return {
            touchStatus: false,
            startY: 0,
            timer: null,
            letter: '',
            showMask: false
        }
    },
    updated() {
        this.startY = this.$refs["list"].children[0].offsetTop
    },
    computed: {
        letters() {
            const letters = []
            for(let key in this.list){
                letters.push(key)
            }
            return letters
        }
    },
    methods: {
        handleLetterClick(e) {
            this.$emit("change", e.target.innerHTML);
        },
        handleTouchStart(e){
            if(e.touches[0].target.nodeName.toUpperCase() === "LI"){
                this.touchStatus = true
                this.showMask = true
            }
        },
        handleTouchMove(e){
            if(this.touchStatus){
                // console.log(this.startY);
                // console.log(e.touches[0].clientY - 85);
                if(this.timer){
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    const index = Math.floor((e.touches[0].clientY - 85 - this.startY) / 18)
                    if(index >= 0 && index < this.letters.length){
                        this.$emit("change", this.letters[index])
                    }
                    this.letter = this.letters[index]
                }, 10)
            }
        },
        handleTouchEnd(){
            this.touchStatus = false
            this.showMask = false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
    .alphabet
        ul
            display flex
            position fixed
            right .15rem
            top 85px
            width .4rem
            bottom 0
            flex-direction column
            justify-content center
            .item
                text-align center
                line-height .43rem
                padding 0 .1rem
                color $bgColor
        .mask
            position absolute
            left 0
            right 0
            top 0
            bottom 0
            margin auto
            width 2rem
            height 2rem
            font-size 1.8rem
            line-height 2rem
            text-align center
            background-color rgba(0,0,0,.1)
</style>