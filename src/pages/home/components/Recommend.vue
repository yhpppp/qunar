<template>
  <div>
    <div class="re-title">热销推荐</div>
    <ul>
      <li class="re-item border-bottom" v-for="item in list" :key="item.id">
        <img class="re-item-img" :src="item.imgUrl" alt="">
        <div class="re-item-info">
          <p class="re-item-info-title">{{item.title}}</p>
          <p class="re-item-info-desc">{{item.desc}}</p>
          <button class="re-item-info-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.re-title
  background #eee
  margin-top .2rem
  line-height .8rem
  text-indent .2rem
.re-item
  overflow hidden
  height 1.9rem
  padding-top .07rem
  padding-bottom .1rem
  display: flex
  border-bottom: 0.01rem solid #f1f1f1
  .re-item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .re-item-info
    flex 1
    min-width 0
    margin-left .1rem
    .re-item-info-title
      line-height .54rem
      font-size .32rem
      ellipsis()
    .re-item-info-desc
      line-height .4rem
      padding-top .0.4rem
      color #bcb8b8
      ellipsis()      
    .re-item-info-button
      background #ff9300
      padding .1rem
      border-radius .08rem
      line-height .44rem
      margin-top .2rem
      padding .1rem
      color #fff
</style>
