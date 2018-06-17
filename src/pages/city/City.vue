<template>
  <div>
    <city-header></city-header>
    <city-search :citiesList="citiesList"></city-search>
    <city-list :letter="letter" :hot="hotCities" :citiesList="citiesList" ></city-list>
    <city-alphabet @change="changeList" :citiesList="citiesList"></city-alphabet>
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "./components/Header";
import CitySearch from "./components/Search";
import CityList from "./components/List";
import CityAlphabet from "./components/alphabet";
export default {
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data() {
    return {
      hotCities: [],
      citiesList: {},
      letter: ''
    };
  },
  methods: {
    /* 发送json */
    getCityData: function() {
      axios.get("api/city.json")
        .then(this.getCityDataSucc);
    },
    /* 获得city数据 */
    getCityDataSucc: function(res) {
      res= res.data
      if(res.ret && res.data){
        const data = res.data
        this.hotCities = data.hotCities
        this.citiesList = data.cities
      }
    },
    /* 子组件事件传递数据保存 */
    changeList: function (letter) {
      this.letter = letter
    }
  },
  mounted() {
    this.getCityData();
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';
</style>
