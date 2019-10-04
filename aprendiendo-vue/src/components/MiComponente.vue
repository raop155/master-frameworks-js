<template>
  <section id="content">
    <h2 class="subheader">{{titulo}}</h2>
    <h1>Mi componente</h1>
    <h2>{{ subtitulo }}</h2>
    <hr>

    <h2>Reactividad</h2>
    <input type="text" placeholder="Ingresa tu nombre por favor!" v-model="name">
    Mi nombre es
    <strong>{{name}}</strong>

    <h2>Directivas condicionales</h2>
    <input type="number" v-model="edad">
    Mi nombre es
    <strong>{{edad}}</strong>

    <p
      style="color: red; font-weight: bold;"
      v-if="edad && edad >= 18 && edad < 65"
    >Eres mayor de edad</p>
    <p style="color: purple; font-weight: bold;" v-else-if="edad && edad >= 65">Eres anciano de edad</p>
    <p style="color: green; font-weight: bold;" v-else>Eres menor de edad</p>

    <h2>Directiva iterativa</h2>
    <ol>
      <!--<li v-for="(pelicula, index) in peliculas" :key="index">{{ pelicula }}</li>-->
      <li v-for="(pelicula, index) in peliculas" :key="index">{{ pelicula }}</li>
    </ol>
  </section>
</template>

<script>
export default {
  name: 'MiComponente',
  data() {
    return {
      titulo: 'Mi-componente',
      subtitulo: 'Soy el subtitulo de mi componente',
      name: '',
      edad: 18,
      peliculas: [
        'Batman vs Superman',
        'El Señor de los anillos',
        'Spiderman',
        'Anabelle'
      ]
    };
  }
};
</script>

<style>
</style>
