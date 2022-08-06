<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold">View User</p>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-md-4">
        <img :src="user.avatar" alt="" class="user-img" />
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">
            Name: <span class="fw-bold">{{ user.name }}</span>
          </li>
          <li class="list-group-item">
            Username: <span class="fw-bold">{{ user.username }}</span>
          </li>
          <li class="list-group-item">
            E-mail: <span class="fw-bold">{{ user.email }}</span>
          </li>
          <li class="list-group-item">
            Phone number: <span class="fw-bold">{{ user.phone }}</span>
          </li>
          <li class="list-group-item">
            Avatar URL: <span class="fw-bold">{{ user.avatar }}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col">
        <router-link to="/" class="btn btn-success">Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { UserService } from "@/services/UserService";
export default {
  data() {
    return {
      userId: this.$route.params.userId,
      user: {},
      errorMessage: null,
    };
  },
  async created() {
    try {
      let res = await UserService.getUser(this.userId);
      this.user = res.data;
    } catch (error) {
      this.errorMessage = error;
    }
  },
};
</script>

<style>
</style>