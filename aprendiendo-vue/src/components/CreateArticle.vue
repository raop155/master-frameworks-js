<template src="./CreateArticle.html"></template>
<script>
import Global from "../Global";
import axios from "axios";
import Article from "../models/Article";
import Sidebar from "./Sidebar";
import { required } from "vuelidate/lib/validators";
import swal from "sweetalert";

export default {
  name: "CreateArticle",
  components: {
    Sidebar
  },
  data() {
    return {
      domain: Global.url,
      file: "",
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
    fileChange() {
      this.file = this.$refs.file.files[0];
      console.log(this.file);
    },
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
                      "Articulo creado",
                      "El articulo ha sido creado correctamente",
                      "success"
                    );

                    this.article = res.data.article;
                    this.$router.push("/blog");
                  } else {
                    swal("Error", "El articulo no ha sido creado", "error");
                  }

                  console.log(res);
                })
                .catch(err => {
                  console.log(err);
                });
            } else {
              swal(
                "Articulo creado",
                "El articulo ha sido creado correctamente",
                "success"
              );
              this.article = res.data.article;
              this.$router.push("/blog");
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