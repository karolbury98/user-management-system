<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold">Add User</p>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-3">
        <form @submit.prevent="addUser()">
          <div class="mb-2">
            <input
              required
              v-model="user.name"
              type="text"
              class="form-control"
              placeholder="Name"
            />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="user.username"
              type="text"
              class="form-control"
              placeholder="Username"
            />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="user.email"
              type="text"
              class="form-control"
              placeholder="E-mail"
            />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="user.phone"
              type="number"
              class="form-control"
              placeholder="Phone number"
            />
          </div>
          <div class="mb-2">
            <input
              required
              v-model="user.avatar"
              type="text"
              class="form-control"
              placeholder="Avatar URL"
            />
          </div>
          <div class="mb-2">
            <input
              required
              type="submit"
              class="btn btn-success"
              value="Submit"
            />
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img :src="user.avatar" alt="" class="user-img" />
      </div>
    </div>
  </div>
</template>

<script>
import { UserService } from "@/services/UserService";
export default {
  data() {
    return {
      user: {
        name: "",
        username: "",
        email: "",
        phone: "",
        avatar: "",
      },
    };
  },
  methods: {
    async addUser() {
      try {
        let res = await UserService.createUser(this.user);
        if (res) {
          return this.$router.push("/");
        } else {
          return this.$router.push("/users/add");
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style>
</style>