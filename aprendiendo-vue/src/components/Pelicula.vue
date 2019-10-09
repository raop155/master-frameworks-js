<template>
  <article class="article-item">
    <div class="image-wrap">
      <img :src="pelicula.image" :alt="pelicula.title" :title="pelicula.title" />
    </div>

    <h2>{{pelicula.title}}</h2>
    <span
      class="date"
      :class="{
              yeargreen:pelicula.year >= 2016, 
              yearred:pelicula.year < 2016
          }"
    >{{pelicula.year}}</span>
    <a href="#">Leer más</a>

    <input type="button" value="Marcar como favorita" @click="pasarFavoritoAlPadre(pelicula)" />

    <div class="clearfix"></div>
  </article>
</template>

<script>
export default {
  name: "Pelicula",
  props: {
    pelicula: Object
  },
  data() {
    return {};
  },
  methods: {
    pasarFavoritoAlPadre(pelicula) {
      this.$emit("favorita", pelicula);
    }
  }
};
</script>

<style>
</style>