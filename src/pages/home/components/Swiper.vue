<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id"><img class="swiper-img" :src="item.imgSrc" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true
      },
      swiperList: [
        {
          id: '01',
          imgSrc: "http://img1.qunarzz.com/qs/1805/79/895429b453f08002.jpg"
        },
        {
          id: '02',
          imgSrc: "http://img1.qunarzz.com/qs/1805/f6/ed3f589004da902.jpg"
        },
        {
          id: '03',
          imgSrc: "http://img1.qunarzz.com/qs/1805/95/f650b837b5246302.jpg"
        },
        {
          id: '04',
          imgSrc: "http://img1.qunarzz.com/qs/1805/f3/a8fd324991914502.jpg"
        }
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff !important;
}

.wrapper {
  // 宽高自适应
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 25%;
  background-color: #eee;
}

.swiper-img {
  width: 100%;
}
</style>

