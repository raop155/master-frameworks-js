<template>
  <div>
    <HeaderComponent/>
    <Slider/>
    <div class="center">
      <router-view/>
      <Sidebar/>
    </div>
    <FooterComponent/>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent';
import Slider from './components/Slider';

import Sidebar from './components/Sidebar';
import FooterComponent from './components/FooterComponent';

export default {
  name: 'app',
  components: {
    HeaderComponent,
    Slider,
    Sidebar,
    FooterComponent
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import './assets/css/styles.css';
</style>
