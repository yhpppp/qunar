<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(pages, index) in pageGroup" :key="index">
        <div class="icon" v-for="item in pages" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-inside" :src="item.imgUrl"><img>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script>
export default {
  name: "HomeIcons",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    };
  },
  computed: {
    /* icon分组 */
    pageGroup() {
      const pages = [];
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8);
        // console.log(page);

        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
@import '~styles/mixins.styl';

.icons >>> .swiper-slide-active {
  height: 0;
  padding-bottom: 50%;
}

.icons {
  margin-top: 0.1rem;

  .icon {
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

    .icon-img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0.44rem;
      box-sizing: border-box;
      padding: 0.1rem;

      .icon-img-inside {
        height: 100%;
        display: block;
        margin: 0 auto;
      }
    }

    .icon-desc {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 0.44rem;
      line-height: 0.44rem;
      text-align: center;
      color: $blackTextColor;
      ellipsis();
    }
  }
}
</style>
