<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImgs="gallaryImgs" :bannerImg="bannerImg"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [],
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
    }
  },
  methods:{
    getDetailData() {
      axios.get('/api/detail.json',{
        params:{
          id: this.$route.params.id
        }
      }).then(this.getDataSucc)
    },
    getDataSucc(res) {
      console.log(res);
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.list = data.categoryList
        this.gallaryImgs = data.gallaryImgs
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
      }
    }
  },
  mounted() {
    this.getDetailData()
  },
}
</script>

<style lang="stylus" scoped>
.content
  height 50rem
</style>
