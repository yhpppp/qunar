<template>
  <ul class="alp-list">
    <li class="alp-item">A</li>
    <li class="alp-item">A</li>
    <li class="alp-item">A</li>
    <li class="alp-item">A</li>
    <li class="alp-item">A</li>
    <li class="alp-item">A</li>
    <li class="alp-item">A</li>
    <li class="alp-item">A</li>
    <li class="alp-item">A</li>
    <li class="alp-item">A</li>
    <li class="alp-item">A</li>
    <li class="alp-item">A</li>
    <li class="alp-item">A</li>
    <li class="alp-item">A</li>
    <li class="alp-item">A</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet"
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
.alp-list
  position absolute 
  display flex
  flex-direction column
  justify-content center
  top 0.6rem
  right 0
  bottom 0
  width .49rem
  .alp-item
    line-height .33rem
    text-align center
    color $bgColor
</style>
