<template src="./CreateArticle.html"></template>
<script>
import Global from "../Global";
import axios from "axios";
import Article from "../models/Article";
import Sidebar from "./Sidebar";
import { required } from "vuelidate/lib/validators";
import swal from "sweetalert";

export default {
  name: "EditArticle",
  components: {
    Sidebar
  },
  data() {
    return {
      domain: Global.url,
      file: "",
      article: new Article("", "", null, ""),
      submitted: false,
      isEdit: true
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
    var article_id = this.$route.params.id;
    this.getArticle(article_id);
  },
  methods: {
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
    getArticle(article_id) {
      console.log(this.domain + "article/" + article_id);
      axios.get(this.domain + "article/" + article_id).then(res => {
        if (res.data.status.toUpperCase() == "SUCCESS") {
          this.article = res.data.article;
        }
      });
    },
    save() {
      this.submitted = true;
      var article_id = this.$route.params.id;

      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      axios
        .put(this.domain + "article/" + article_id, this.article)
        .then(res => {
          if (res.data.status.toUpperCase() == "SUCCESS") {
            if (this.file) {
              const formData = new FormData();
              formData.append("file0", this.file, this.file.name);

              axios
                .post(
                  this.domain + "upload-image/" + res.data.article._id,
                  formData
                )
                .then(res => {
                  if (res.data.article) {
                    swal(
                      "Articulo editado",
                      "El articulo ha sido editado correctamente",
                      "success"
                    );

                    this.article = res.data.article;
                    this.$router.push("/articulo/" + article_id);
                  } else {
                    swal("Error", "El articulo no ha sido editado", "error");
                  }

                  console.log(res);
                })
                .catch(err => {
                  console.log(err);
                });
            } else {
              swal(
                "Articulo editado",
                "El articulo ha sido editado correctamente",
                "success"
              );
              this.article = res.data.article;
              this.$router.push("/articulo/" + article_id);
            }
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