<template>
  <section id="content">
    <h2 class="subheader">Peliculas</h2>

    <!--Listado articulos-->
    <div id="articles">
      <article class="article-item" v-for="pelicula in peliculas" :key="pelicula.title">
        <div class="image-wrap">
          <img :src="pelicula.image" :alt="pelicula.title" :title="pelicula.title">
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

        <div class="clearfix"></div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Peliculas',
  data() {
    return {
      peliculas: [
        {
          title: 'Batman vs Superman',
          year: 2017,
          image:
            'https://www.sideshow.com/storage/product-images/200539/batman-vs-superman_dc-comics_gallery_5cd2019baaca4.jpg'
        },
        {
          title: 'Gran Torino',
          year: 2015,
          image: 'https://pics.filmaffinity.com/Gran_Torino-278262332-large.jpg'
        },
        {
          title: 'El Señor de los Anillos',
          year: 2003,
          image:
            'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/series-television/el-senor-de-los-anillos-serie-television-netflix-amazon/137679468-1-esl-ES/El-senor-de-los-anillos-la-serie-que-quieren-Netflix-Amazon-y-HBO.jpg?resize=480:*'
        },
        {
          title: 'El Señor de los Anillos',
          year: 2003,
          image:
            'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/series-television/el-senor-de-los-anillos-serie-television-netflix-amazon/137679468-1-esl-ES/El-senor-de-los-anillos-la-serie-que-quieren-Netflix-Amazon-y-HBO.jpg?resize=480:*'
        }
      ]
    };
  }
};
</script>

<style>
</style>
