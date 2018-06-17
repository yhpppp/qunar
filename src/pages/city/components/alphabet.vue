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
      touchStatus: false,
      startY: 0,
      timer: null
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
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79;
          const index = Math.floor((touchY - this.startY) / 20);
          if (index >= 0 && index < this.letters.length) {
            this.$emit("change", this.letters[index]);
          };
        }, 16)
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
  },
  updated() {
    this.startY = this.$refs["A"][0].offsetTop
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
