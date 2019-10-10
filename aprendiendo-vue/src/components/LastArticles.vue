<template>
  <div class="general">
    <Slider texto="¡Bienvenido al curso!" :home="true" />
    <div class="center">
      <section id="content">
        <h2 class="subheader">Últimos artículos</h2>
        <Articles :articles="articles" />
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
  name: "LastArticles",
  components: {
    Slider,
    Sidebar,
    Articles
  },
  data() {
    return {
      domain: Global.url,
      articles: []
    };
  },
  mounted() {
    this.getLastArticles();
  },
  methods: {
    getLastArticles() {
      axios.get(this.domain + "articles/last").then(res => {
        if (res.data.status.toUpperCase() == "SUCCESS") {
          this.articles = res.data.article;
          console.log(this.articles);
        }
      });
    }
  }
};
</script>

<style>
</style>
