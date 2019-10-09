<template>
  <div id="slider" :class="getClasses()">
    <h1>{{texto}}</h1>
    <router-link to="/blog" class="btn-white" v-if="home">Ir al Blog</router-link>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    texto: String,
    home: Boolean
  },
  data() {
    return {
      sliderClass: {
        "slider-big": false,
        "slider-small": false
      }
    };
  },
  methods: {
    getClasses() {
      if (this.home === true) this.sliderClass["slider-big"] = true;
      else this.sliderClass["slider-small"] = true;
      return this.sliderClass;
    }
  }
};
</script>

<style>
</style>
