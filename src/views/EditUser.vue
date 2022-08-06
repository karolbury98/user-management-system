<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold">Edit User</p>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="row">
      <div class="col-md-3">
        <form @submit.prevent="editUser()">
          <div class="mb-2">
            <input
              v-model="user.name"
              type="text"
              class="form-control"
              placeholder="Name"
            />
          </div>
          <div class="mb-2">
            <input
              v-model="user.username"
              type="text"
              class="form-control"
              placeholder="Username"
            />
          </div>
          <div class="mb-2">
            <input
              v-model="user.email"
              type="text"
              class="form-control"
              placeholder="E-mail"
            />
          </div>
          <div class="mb-2">
            <input
              v-model="user.phone"
              type="number"
              class="form-control"
              placeholder="Phone number"
            />
          </div>
          <div class="mb-2">
            <input
              v-model="user.avatar"
              type="text"
              class="form-control"
              placeholder="Avatar URL"
            />
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Edit" />
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
      userId: this.$route.params.userId,
      user: {
        name: "",
        username: "",
        email: "",
        phone: "",
        avatar: "",
      },
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
  methods: {
    async editUser() {
      try {
        let res = await UserService.updateUser(this.user, this.userId);
        if (res) {
          return this.$router.push("/");
        } else {
          return this.$router.push(`/users/edit/${this.userId}`);
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