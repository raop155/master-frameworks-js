<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <article class="article-item article-detail" v-if="article">
          <div class="image-wrap">
            <img
              :src="domain + 'get-image/' + article.image"
              :alt="article.image"
              v-if="article.image"
            />
            <img src="../assets/images/default.png" :alt="article.image" v-if="!article.image" />
          </div>

          <h1 class="subheader">{{article.title}}</h1>
          <span class="date">{{article.date | moment("from", "now")}}</span>
          <p>{{article.content}}</p>
          <div class="clearfix"></div>
        </article>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Global from "../Global";

import Sidebar from "./Sidebar";
import axios from "axios";

export default {
  name: "Article",
  components: {
    Sidebar
  },
  data() {
    return {
      domain: Global.url,
      article: null
    };
  },
  mounted() {
    var article_id = this.$route.params.id;
    this.getArticle(article_id);
  },
  methods: {
    getArticle(article_id) {
      console.log(this.domain + "article/" + article_id);
      axios.get(this.domain + "article/" + article_id).then(res => {
        if (res.data.status.toUpperCase() == "SUCCESS") {
          this.article = res.data.article;
        }
      });
    }
  }
};
</script>

<style>
</style>