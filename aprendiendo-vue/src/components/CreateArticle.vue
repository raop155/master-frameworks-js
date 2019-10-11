<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <h1 class="subheader">Crear articulo</h1>

        <!-- form -->
        <form action class="mid-form" @submit.prevent="save()">
          <div class="form-group">
            <label for="title">Titulo</label>
            <input type="text" name="title" v-model="article.title" />
            <div v-if="submitted && !$v.article.title.required">Ingrese titulo</div>
          </div>

          <div class="form-group">
            <label for="content">Contenido</label>
            <textarea name="content" v-model="article.content" />
            <div v-if="submitted && !$v.article.content.required">Ingrese contenido</div>
          </div>

          <div class="form-group">
            <label for="image">Imagen</label>
            <input type="file" name="image" />
          </div>

          <div class="clearfix"></div>

          <input type="submit" value="Guardar" class="btn btn-success" />
        </form>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>
<script>
import Global from "../Global";
import axios from "axios";

import Article from "../models/Article";

import Sidebar from "./Sidebar";

import { required } from "vuelidate/lib/validators";

export default {
  name: "CreateArticle",
  components: {
    Sidebar
  },
  data() {
    return {
      domain: Global.url,
      article: new Article("", "", null, ""),
      submitted: false
    };
  },
  validations: {
    article: {
      title: {
        required
      },
      content: {
        required
      }
    }
  },
  mounted() {
    console.log(this.article);
  },
  methods: {
    save() {
      this.submitted = true;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      axios
        .post(this.domain + "save", this.article)
        .then(res => {
          if (res.data.status.toUpperCase() == "SUCCESS") {
            this.$router.push("/blog");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>