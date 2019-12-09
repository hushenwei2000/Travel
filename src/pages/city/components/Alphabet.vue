<template>
  <div class="alphabet">
      <ul class="list" ref="list" 
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd">
          <li class="item" 
            v-for="(item, key) in letters" 
            :key=key
            @click="handleLetterClick"
            
            >{{item}}</li>
      </ul>
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
            timer: null
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
                }, 16)
            }
        },
        handleTouchEnd(){
            this.touchStatus = false
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
    .list
        display flex
        position fixed
        right 0
        top 85px
        width .4rem
        bottom 0
        flex-direction column
        justify-content center
        .item
            text-align center
            line-height .36rem
            color $bgColor
</style>