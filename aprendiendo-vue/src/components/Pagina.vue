<template>
  <section id="content">
    <h2 class="subheader">Pagina</h2>
    <h3>{{ id }}</h3>
    <button @click="updateName()">Update Name</button>
    <button @click="linkToBlog()">Link to blog</button>
    <h4>{{name}}</h4>
  </section>
</template>

<script>
export default {
  name: 'Pagina',
  created() {
    console.log('created');
  },
  mounted() {
    this.id = this.$route.params.id;
    console.log('mounted');
  },
  updated() {
    console.log('updated');
  },
  destroyed() {
    console.log('destroyed');
  },
  data() {
    return {
      id: null,
      name: 'RAOP'
    };
  },
  methods: {
    updateName() {
      this.name = 'Ricardo Olarte.';
    },
    linkToBlog() {
      this.$router.push('/blog');
      // this.$router.push({ name: 'pagina', params: { id: 'Redirección' } });
    }
  }
};
</script>

<style>
</style>
