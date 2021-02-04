import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import AccountsOverview from "../views/AccountsOverview.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuthentication: true,
    },
  },
  {
    path: "/accounts",
    name: "AccountsOverview",
    component: AccountsOverview,
    meta: {
      requiresAuthentication: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach(async (to, from, next) => {
  const user = store.state.User.user;

  const requiresAuthentication = to.matched.some(
    (record) => record.meta.requiresAuthentication
  );

  if (requiresAuthentication && !user) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
