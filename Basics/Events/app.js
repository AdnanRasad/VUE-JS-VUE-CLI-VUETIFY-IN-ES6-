new Vue({
  el: "#app",
  data: {
    wage: 0,
    coords: {
      x: 0,
      y: 0
    }
  },
  methods: {
    methodDecreaser() {
      this.wage -= 1;
    },
    AlertEvent(e) {
      alert(e);
      console.log(e);
    },

    logCoords(e) {
      this.coords.x = e.offsetX;
      this.coords.y = e.offsetY;
    }
  }
});
