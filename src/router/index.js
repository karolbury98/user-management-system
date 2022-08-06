import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import UserManager from "../views/UserManager.vue";
import AddUser from "../views/AddUser.vue";
import EditUser from "../views/EditUser.vue";
import ViewUser from "../views/ViewUser.vue";

const routes = [
  {
    path: "/",
    name: "HomePage",
    redirect: "/users",
    component: HomePage,
  },
  {
    path: "/users",
    name: "UserManager",
    component: UserManager,
  },
  {
    path: "/users/add",
    name: "AddUser",
    component: AddUser,
  },
  {
    path: "/users/edit/:userId",
    name: "EditUser",
    component: EditUser,
  },
  {
    path: "/users/view/:userId",
    name: "ViewUser",
    component: ViewUser,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
