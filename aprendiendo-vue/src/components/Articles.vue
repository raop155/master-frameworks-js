<template>
  <section id="articles-component">
    <div class="article-list" v-if="articles && articles.length > 0">
      <article class="article-item" v-for="article in articles" :key="article._id">
        <div class="image-wrap">
          <img
            :src="domain + 'get-image/' + article.image"
            :alt="article.title"
            v-if="article.image"
          />
          <img src="../assets/images/default.png" :alt="article.title" v-if="!article.image" />
        </div>

        <h2>{{article.title}}</h2>
        <span class="date">{{article.date | moment('from', "now")}}</span>
        <a href="#">Leer más</a>

        <div class="clearfix"></div>
      </article>
    </div>
    <div v-else-if="articles && articles.length <= 0">No hay articulos</div>
    <div v-else>Cargando...</div>
  </section>
</template>

<script>
import Global from "../Global";
export default {
  name: "Articles",
  props: {
    articles: Array
  },
  data() {
    return {
      domain: Global.url
    };
  }
};
</script>

<style>
</style>