<!--Recomended is to use router-link for anchoring, also note tht from style the a{} will also be used for router-link tag-->
<!--We do data binding in About, when vue see the name its gonna grab the path from index.js, (benifit is if you wanna update the router than its gonna need you to update from index.js only)-->
<template>
  <nav class="main-nav">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link :to="{name:'About'}">About</router-link>
      </li>
    </ul>
  </nav>
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
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
