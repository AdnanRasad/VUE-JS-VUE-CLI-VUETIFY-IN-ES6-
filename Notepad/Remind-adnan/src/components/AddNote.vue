<template>
  <div class="add-note container">
    <h2 class="center-align cyan-text">Add New Smriti</h2>
    <form @submit.prevent="AddNote">
      <div class="field title">
        <label for="title">Smriti Title:</label>
        <input type="text" name="smriti-title" v-model="title">
      </div>
      <div class="field add-integredent">
        <label for="add-ingredient">Smriti :</label>
        <input type="text" name="add-smriti" v-model="ingredients">
      </div>
      <div class="field center-align">
        <button class="btn pink">Add Smriti</button>
      </div>
    </form>
  </div>
</template>


<script>
import db from "@/firebase/init";
import slugify from "slugify";

export default {
  name: "AddNote",
  data() {
    return {
      title: null,
      ingredients: null,
      slug: null
    };
  },
  methods: {
    AddNote() {
      if (this.title) {
        this.slug = slugify(this.title, {
          replacement: "-",
          remove: /[$*_+~.()'"!\-:@]/g,
          lower: true
        });

        //console.log(this.title + this.slug + this.ingredients);

        db.collection("smoothies")
          .add({
            title: this.title,
            ingredients: this.ingredients,
            slug: this.slug
          })
          .then(() => {
            this.$router.push({ name: "Index" });
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>

<style>
.add-note {
  margin-top: 60px;
  padding: 20px;
  max-width: 500px;
}
.add-note h2 {
  font-size: 2em;
  margin: 20 px auto;
}
.add-note .field {
  margin: 20 px auto;
}
</style>
