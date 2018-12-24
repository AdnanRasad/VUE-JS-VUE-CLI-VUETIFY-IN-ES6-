<!--template script styles-->

<template>
  <div id="Online-Friends">
    <h2>Online Friends</h2>
    <div v-for="(friend, index) in friends" :key="index">
      <span v-if="friend.online">{{friend.name}}</span>
    </div>
  </div>
</template>


<script>
export default {
  name: "OnlineFriends",
  props: ["friends"],

  data() {
    return {
      // friends: [
      /*{ name: "Adnan", online: true },
        { name: "Sebonti", online: true },
        { name: "Nazmu", online: false },
        { name: "Faiyaz", online: false }
        */
    };
  }
};
</script>


<style scoped>
</style>
