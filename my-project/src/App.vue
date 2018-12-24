<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>{{title}}</h2>
    <Nav/>
    <!--<Allfriends>-->
    <!--<OnlineFriends>-->
    <!--Sending friend array as a props/properties
    Now we are declaring friends array here and sending it to Allfriends and OnlineFriends by using data binding, 
    without the ':' sign it would send friends as a string not as an array-->
    <Allfriends :friends="friends" @delete="deleteMethod"/>
    <OnlineFriends :friends="friends"/>
    <h2>Hey this line is from App.vue</h2>
  </div>
</template>

<script>
import Nav_Adnan from "./Navbar";
import Allfriends from "./Allfriends";
import OnlineFriends from "./OnlineFriends";

export default {
  name: "app",

  components: {
    //making an obj named Nav and gonna use something from Nav_Adnan, if we were to write Nav_Adnan:Nav_Adnan, then we need not to write it again just could write Nav_Adnan once
    Nav: Nav_Adnan,

    //Done importing, steps were 1)  import Nav_Adnan from './Navbar' 2) make components:{} object [careful componentS] then Nav:Nav_Adnan
    //Now we are gonna use it from App.vue's template
    Allfriends,
    OnlineFriends
  },

  //previously we saw that data was just an object but now we see its a function returning an object
  //this is done so that each time this is used it returns new object, so that we can protect our data
  //otherwise the same datawould be shared by all

  data() {
    return {
      msg: "Welcome to Adnan's Vue.js App",
      title: "First Vue CLI App",
      friends: [
        { name: "Adnan", online: true },
        { name: "Sebonti", online: true },
        { name: "Nazmu", online: false },
        { name: "Faiyaz", online: false }
      ]
    };
  },
  methods: {
    deleteMethod(namePayload) {
      //console.log(namePayload);
      //this.filter ke filter koro ebong filter kora this.friend ke this.friend er moddhe dhukao?

      this.friends = this.friends.filter(friend => {
        return friend.name !== namePayload.name;
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
