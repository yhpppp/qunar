<template>
  <div class="list" ref="wrapper">
    <div class="">
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of citiesList" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="innerItem in item" :key="innerItem.id"  @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
/* 页面滚动插件 */
import BScroll from 'better-scroll'
import {mapState,mapMutations} from 'vuex'
export default {
  name: "CityList",
  props: {
    hot: Array,
    citiesList: Object,
    letter: String
  },
  computed:{
    ...mapState({
      currentCity: 'city'
    })
  },
  methods:{
    handleCityClick(city){
      this.changeCity(city)
      this.$router.push('/')      
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper)
  },
  watch: {
    letter () {
      // console.log('letter:',this.letter);
      if(this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
};

</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';

.border-topbottom {
  &:before {
    border-color: #ccc;
  }

  &:after {
    border-color: #ccc;
  }
}

.border-bottom {
  &:before {
    border-color: #ccc;
  }
}

.list {
  overflow: hidden;
  position: absolute;
  top: 1.8rem;
  left: 0;
  bottom: 0;
  right: 0;

  .title {
    line-height: 0.5rem;
    background: #eee;
    padding-left: 0.2rem;
    color: #666;
  }

  .button-list {
    padding: 0.05rem;
    overflow: hidden;
    margin: 0.1rem 0.6rem 0.1rem 0.1rem;

    .button-wrapper {
      float: left;
      width: 33.33%;

      .button {
        margin: 0.1rem;
        padding: 0.1rem;
        text-align: center;
        border: 0.01rem solid #ccc;
        border-radius: 0.08rem;
      }
    }
  }

  .item-list {
    .item {
      line-height: 0.76rem;
      padding-left: 0.2rem;
    }
  }
}
</style>
