<template>
  <div class="general">
    <Slider texto="Blog" />
    <div class="center">
      <section id="content">
        <h1 class="subheader">Blog</h1>
        <Articles :articles="articles" v-if="articles" />
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
  name: "Blog",
  components: {
    Slider,
    Sidebar,
    Articles
  },
  data() {
    return {
      domain: Global.url,
      articles: null
    };
  },
  mounted() {
    this.getArticles();
  },
  methods: {
    getArticles() {
      axios.get(this.domain + "articles").then(res => {
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
