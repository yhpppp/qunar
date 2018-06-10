<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hot="hotCities" :citiesList="citiesList" ></city-list>
    <city-alphabet :citiesList="citiesList"></city-alphabet>
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
      citiesList: {}
    };
  },
  methods: {
    getCityData: function() {
      axios.get("api/city.json")
        .then(this.getCityDataSucc);
    },
    getCityDataSucc: function(red) {
      red = red.data
      if(red.ret && red.data){
        const data = red.data
        this.hotCities = data.hotCities
        console.log(data);
        this.citiesList = data.cities
        console.log(this.citiesList);
        
      }
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
