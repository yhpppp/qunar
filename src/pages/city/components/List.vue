<template>
  <div class="list">
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
        <div class="button-wrapper">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
      </div>
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
      </div>
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
      </div>
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
      </div>
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
      </div>
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
      </div>
      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
      </div>

      <div class="title border-topbottom">A</div>
      <div class="item-list">
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
        <div class="item border-bottom">西安</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityList"
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
  .border-topbottom
    &:before 
      border-color #ccc
    &:after
      border-color #ccc      
  .border-bottom
    &:before
      border-color #ccc 
  .list
    overflow hidden
    position absolute 
    top 1.8rem
    left 0
    bottom 0
    right 0
    background red     
    .title
      line-height .4rem
      background #eee
      padding-left .2rem
      color #666
    .button-list
      padding .05rem
      overflow hidden
      margin .1rem .6rem .1rem .1rem

      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem
          text-align center
          border .01rem solid #ccc
          border-radius .08rem
    
    .item-list
      .item
        line-height .76rem
        padding-left .2rem
</style>
