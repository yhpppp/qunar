<template>
  <ul class="alp-list">
    <li class="alp-item" v-for="item in letters" :key="item" :ref="item" @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd" @click="letterClick">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: "CityAlphabet",
  props: {
    citiesList: Object
  },
  data() {
    return {
      touchStatus: false
    };
  },
  computed: {
    letters() {
      const letters = [];
      for (let i in this.citiesList) {
        letters.push(i);
      }
      return letters;
    }
  },
  methods: {
    letterClick(e) {
      this.$emit("change", e.target.innerText);
      // console.log(e);
    },
    handleTouchStart() {
      this.touchStatus = true;
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        console.log(this.$refs);
        console.log(e);
        
        const startY = this.$refs["A"][0].offsetTop;
        const touchY = e.touches[0].clientY - 79;
        const index = Math.floor((touchY - startY) / 20);
        if (index >= 0 && index < this.letters.length) {
          this.$emit("change", this.letters[index]);
        }
      }
    },
    handleTouchEnd() {
      this.touchStatus = false;
    }
  },
  mounted() {
    document.addEventListener("touchmove", this._preventDefault, {
      passive: false
    });
  }
};
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl';


.alp-list {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  top: 0.6rem;
  right: 0;
  bottom: 0;
  width: 0.49rem;

  .alp-item {
    line-height: 0.33rem;
    text-align: center;
    color: $bgColor;
  }
}
</style>
