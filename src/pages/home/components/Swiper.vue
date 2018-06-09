<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item in list" :key="item.id"><img class="swiper-img" :src="item.imgUrl" alt=""></swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div> 
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        pagination: ".swiper-pagination",
        loop: true,
        autoplay: 2000
      }
    }
  },
  computed: {
    showSwiper: function () {
      return this.list.length
    }
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
  padding-bottom: 32%;
  background-color: #eee;
}

.swiper-img {
  width: 100%;
}
</style>

