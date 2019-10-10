<template>
  <div class="general">
    <Slider :texto="'Busqueda: ' + searchString" />
    <div class="center">
      <section id="content">
        <h1 class="subheader" v-if="articles">Articulos encontrados</h1>
        <h1 class="subheader" v-else>Sin resultados</h1>
        <Articles :articles="articles" v-if="articles" />
        <div v-else>No hay articulos para mostrar</div>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Global from "../Global";
import axios from "axios";

import Slider from "./Slider";
import Sidebar from "./Sidebar";
import Articles from "./Articles";

export default {
  name: "Search",
  components: {
    Slider,
    Sidebar,
    Articles
  },
  data() {
    return {
      domain: Global.url,
      articles: null,
      searchString: null
    };
  },
  mounted() {
    this.searchString = this.$route.params.searchString;
    this.getArticlesBySearch(this.searchString);
  },
  methods: {
    getArticlesBySearch(searchString) {
      axios.get(this.domain + "search/" + searchString).then(res => {
        if (res.data.status.toUpperCase() == "SUCCESS") {
          this.articles = res.data.articles;
          console.log(this.articles);
        }
      });
    }
  }
};
</script>

<style>
</style>
