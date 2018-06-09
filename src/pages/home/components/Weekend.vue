<template>
  <div>
    <div class="re-title">周末去哪儿</div>
    <ul>
      <li class="re-item border-bottom" v-for="item in list" :key="item.id">
        <div class="img-wrapper">
          <img class="re-item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="re-item-info">
          <p class="re-item-info-title">{{item.title}}</p>
          <p class="re-item-info-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props: {
    list: Array
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.re-title 
  background: #eee;
  line-height: 0.8rem;
  text-indent: 0.2rem;

.img-wrapper
  overflow hidden
  height 0
  padding-bottom 36.9%
  background red
  .re-item-img 
    width 100%
  
.re-item-info 
  flex: 1;
  min-width: 0;
  margin-left: 0.1rem;
  margin-bottom: .14rem
  

  .re-item-info-title 
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  

  .re-item-info-desc 
    line-height: 0.4rem;
    padding-top: 0 0.4rem;
    margin-bottom 0.1rem
    color: #bcb8b8;
    ellipsis();
  

  

</style>
