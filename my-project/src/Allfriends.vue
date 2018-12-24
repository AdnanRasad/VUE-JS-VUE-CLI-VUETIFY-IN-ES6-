<!--template script styles-->

<template>
  <div id="All-Friends">
    <h2>All Friends</h2>
    <!--To remove this red underline see OnlineFriend.vue's for loop-->
    <div v-for="bondhu in friends">
      <span @click="unfriend(bondhu.name)">{{bondhu.name}}</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "Allfriends",
  //To recieve the array send by App.vue or to sent a prop, we have to do this , we can add more props like ,props [friends, ages]
  props: ["friends"],
  data() {
    return {
      /*Instead of declaring friends here and also in OnlineFriend.vue we should put it somewhere and then use it here, we are gonna put friends array in app.vue

         friends: [
        { name: "Adnan", online: true },
        { name: "Sebonti", online: true },
        { name: "Nazmu", online: false },
        { name: "Faiyaz", online: false }
        */
    };
  },
  methods: {
    unfriend(name) {
      this.$emit("delete", { name: name });
    }
  }
};
</script>


<style scoped>
</style>
