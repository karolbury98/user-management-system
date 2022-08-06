<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col">
        <p class="h3">
          User Management System
          <router-link to="/users/add" class="btn btn-success btn-sm"
            >Add User</router-link
          >
        </p>
        <form>
          <div class="row">
            <div class="col-md-6">
              <div class="row">
                <div class="col">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter a name..."
                  />
                </div>
                <div class="col">
                  <input type="submit" class="btn btn-outline-dark" value="Search"/>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>

  <div class="container mt-3" v-if="users">
    <div class="row">
        <div class="col-md-6" v-for="user in users" :key="user.id">
            <div class="card my-2">
                <div class="card-body">
                    <div class="row align-items-center">
                        <div class="col-sm-4">
                               <img :src="user.avatar" alt="avatar" class="user-img">
                        </div>
                        <div class="col-sm-7">
                            <ul class="list-group">
                                <li class="list-group-item">Name: <span class="fw-bold">{{ user.name }}</span></li>
                                <li class="list-group-item">Username: <span class="fw-bold">{{ user.username }}</span></li>
                                <li class="list-group-item">E-mail: <span class="fw-bold">{{ user.email }}</span></li>
                                <li class="list-group-item">Phone number: <span class="fw-bold">{{ user.phone }}</span></li>
                            </ul>
                        </div>
                        <div class="col-sm-1 d-flex flex-column justify-content-center align-items-center">
                            <router-link to="users/view/:userId" class="btn btn-warning my-1">
                                <i class="fa fa-eye"></i>
                            </router-link>
                            <router-link to="users/edit/:userId" class="btn btn-primary my-1">
                                <i class="fa fa-pen"></i>
                            </router-link>
                            <button class="btn btn-danger my-1">
                                <i class="fa fa-trash"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { UserService } from '@/services/UserService';

export default {
  data() {
    return {
      users: [],
      errorMessage: null
    };
  },
  created: async function() {
    try {
      let res = await UserService.getAllUsers();
      this.users = res.data;
    } catch(error){
      this.errorMessage = error;
    }
  },
  methods: {

  }
};
</script>

<style>
</style>