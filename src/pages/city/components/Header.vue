<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont back-icon">&#xe624;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "CityHeader"
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.header {
  position: relative;
  overflow: hidden;
  height: $headerHeight;
  line-height: $headerHeight;
  text-align: center;
  color: #ffffff;
  font-size: 0.32rem;
  background: $bgColor;

  .back-icon {
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    width: 0.66rem;
    color: #fff
    font-size 0.3rem
  }
}
</style>
