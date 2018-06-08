<template>
  <div>
    <div class="re-title">周末去哪儿</div>
    <ul>
      <li class="re-item border-bottom" v-for="item in recommend" :key="item.id">
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
  data() {
    return {
      recommend: [
        {
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9f/f585152825459.jpg_r_640x214_5d46e4cc.jpg',
        title: '大连圣亚海洋世界',
        desc: '浪漫大连首站，浪漫的海洋主题乐园'
      }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';

.re-title 
  background: #eee;
  margin-top: 0.2rem;
  line-height: 0.8rem;
  text-indent: 0.2rem;

.img-wrapper
  overflow hidden
  height 0
  padding-bottom 33.9%
  background red
  .re-item-img 
    width 100%
  
.re-item-info 
  flex: 1;
  min-width: 0;
  margin-left: 0.1rem;

  .re-item-info-title 
    line-height: 0.54rem;
    font-size: 0.32rem;
    ellipsis();
  

  .re-item-info-desc 
    line-height: 0.4rem;
    padding-top: 0 0.4rem;
    color: #bcb8b8;
    ellipsis();
  

  

</style>
