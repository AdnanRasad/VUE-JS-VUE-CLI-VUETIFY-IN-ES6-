//So say if the div id app has some string an that we wanna manipulate here with vue we can do it like,

new Vue({
  el: "#app",
  data: {
    title: "Adnan learning vue",
    name: "Adnan",
    url: "http://www.facebook.com",
    classes: ["one", "two"]
  },

  methods: {
    greet(time) {
      return `${time} From a method named greet ${this.title}`; //see the backticks
    }
  }
});
