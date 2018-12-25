import Vue from "vue";
import Router from "vue-router";
import Index from "@/components/index";
import AddNote from "@/components/AddNote";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: Index
    },
    {
      path: "/addchirkut",
      name: "AddNote",
      component: AddNote
    }
  ]
});
