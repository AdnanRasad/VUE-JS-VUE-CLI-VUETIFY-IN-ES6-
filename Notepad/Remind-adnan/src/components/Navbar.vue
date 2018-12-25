<!--We re using anchor tag because we will be using some style on that-->

<template>
  <div class="navbar">
    <nav class="nav-extended cyan darken-2">
      <div class="nav-content">
        <router-link :to="{name: 'Index'}">
          <span class="nav-title">Smriti</span>
          <blockquote class="black-text">
            <p>
              A notepad website built with Framework VueJS & Firebase.
              Developed by Adnan Rasad for learning beyond and showcasing purposes.
            </p>
            <a
              href="http://www.github.com/adnanrasad/VUE-JS-VUE-CLI-VUETIFY-IN-ES6-"
            >Check this project here at Github!</a>
          </blockquote>
          <br>
        </router-link>

        <a href class="btn-floating btn-large halfway-fab pink">
          <router-link :to="{name: 'AddNote'}">
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {};
  }
};
</script>

<style>
.navbar nav {
  padding: 0 20px;
}
</style>
