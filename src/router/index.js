import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard.vue";
import AccountsOverview from "../views/AccountsOverview.vue";
import AccountView from "../views/AccountView.vue";
import NewTransaction from "../views/NewTransaction.vue";
import NewAccount from "../views/NewAccount.vue";
import { auth } from "../utils/firebase"

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
      requiresAuth: true,
    },
  },
  {
    path: "/accounts/new",
    name: "NewAccount",
    component: NewAccount,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/transactions/new",
    name: "NewTransaction",
    component: NewTransaction,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/accounts",
    name: "AccountsOverview",
    component: AccountsOverview,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/accounts/:id",
    name: "AccountView",
    component: AccountView,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(
    (record) => record.meta.requiresAuth
  );

  if (requiresAuth && !auth.currentUser) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
