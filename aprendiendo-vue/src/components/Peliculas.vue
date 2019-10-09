<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h2 class="subheader">Peliculas</h2>

        <div class="mis-datos" v-if="misDatos">
          <p v-html="misDatos"></p>
          {{web | mayusculas | concatenaYear('El mejor año!')}}
        </div>

        <div class="favorita" v-if="favorita">
          La pelicula favorita es:
          <h3>{{favorita.title}}</h3>
        </div>

        <!--Listado articulos-->
        <div id="articles">
          <!---->
          <div v-for="pelicula in peliculasMayuscula" :key="pelicula.title">
            <Pelicula :pelicula="pelicula" @favorita="haLLegadoLaPeliculaFavorita" />
          </div>
        </div>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Pelicula from "./Pelicula.vue";
import Sidebar from "./Sidebar";

export default {
  name: "Peliculas",
  components: {
    Pelicula,
    Sidebar
  },
  methods: {
    haLLegadoLaPeliculaFavorita(pelicula) {
      this.favorita = pelicula;
    }
  },
  computed: {
    peliculasMayuscula() {
      var peliculasMod = this.peliculas;

      peliculasMod.forEach(pelicula => {
        pelicula.title = pelicula.title.toUpperCase();
      });

      return peliculasMod;
    },
    misDatos() {
      return (
        this.nombre + " " + this.apellido + " <br> <b>Email:</b> " + this.web
      );
    }
  },
  filters: {
    mayusculas(value) {
      return value.toUpperCase();
    },
    concatenaYear(value, message) {
      return value + " " + new Date().getFullYear() + " " + message;
    }
  },
  data() {
    return {
      favorita: null,
      nombre: "Ricardo",
      apellido: "Olarte",
      web: "raop155@hotmail.com",
      peliculas: [
        {
          title: "Batman vs Superman",
          year: 2017,
          image:
            "https://www.sideshow.com/storage/product-images/200539/batman-vs-superman_dc-comics_gallery_5cd2019baaca4.jpg"
        },
        {
          title: "Gran Torino",
          year: 2015,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLIzjtl1XvpRLo25rWJuMh9ZEeBH5QZivTNsI9Z1ipOv3uJgb"
        },
        {
          title: "El Señor de los Anillos",
          year: 2003,
          image:
            "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/series-television/el-senor-de-los-anillos-serie-television-netflix-amazon/137679468-1-esl-ES/El-senor-de-los-anillos-la-serie-que-quieren-Netflix-Amazon-y-HBO.jpg?resize=480:*"
        },
        {
          title: "El Señor de los Anillos 2",
          year: 2003,
          image:
            "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/series-television/el-senor-de-los-anillos-serie-television-netflix-amazon/137679468-1-esl-ES/El-senor-de-los-anillos-la-serie-que-quieren-Netflix-Amazon-y-HBO.jpg?resize=480:*"
        }
      ]
    };
  }
};
</script>

<style>
</style>
