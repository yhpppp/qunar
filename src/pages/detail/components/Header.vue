<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>      
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
name: 'detailHeader',
data() {
  return {
    showAbs: true,
    opacityStyle: {
      opacity: 0
    }
  }
},
methods:{
  handleScroll () {
    const scrollTop = document.documentElement.scrollTop
    if (scrollTop > 60) {
      let opacity = scrollTop / 140
      opacity = opacity > 1 ? 1 : opacity
      this.opacityStyle = {opacity}
      this.showAbs = false
    } else {
      this.showAbs = true
    }
  }
},
activated() {
  window.addEventListener('scroll', this.handleScroll)
},
deactivated() {
  window.removeEventListener('scroll', this.handleScroll)
},
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header-abs
  position absolute
  left .2rem
  top .2rem
  width .8rem
  height .8rem
  line-height .8rem
  border-radius .4rem
  text-align center
  background rgba(0,0,0,.8)
  .header-abs-back
    color #fff
    font-size .4rem
.header-fixed
  position: fixed;
  top 0
  left 0
  right 0
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #ffffff;
  font-size: 0.32rem;
  background: $bgColor;
  .header-fixed-back
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    width: 0.66rem;
    color: #fff
    font-size 0.3rem
  

</style>
