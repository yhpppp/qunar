<template>
  <ul class="alp-list">
    <li class="alp-item" @click="letterClick" v-for="(item, key) of citiesList" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    citiesList: Object
  },
  methods: {
    letterClick (e) {
      this.$emit('change',e.target.innerText)
      // console.log(e);
    }
  }
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
