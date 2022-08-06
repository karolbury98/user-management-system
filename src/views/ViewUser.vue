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
        <img src="" alt="avatar" class="user-img" />
      </div>
      <div class="col-md-6">
        <ul class="list-group">
          <li class="list-group-item">
            Name: <span class="fw-bold">Name</span>
          </li>
          <li class="list-group-item">
            Username: <span class="fw-bold">Username</span>
          </li>
          <li class="list-group-item">
            E-mail: <span class="fw-bold">e-mail</span>
          </li>
          <li class="list-group-item">
            Phone number: <span class="fw-bold">phone number</span>
          </li>
          <li class="list-group-item">
            Avatar URL: <span class="fw-bold">url</span>
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
export default {};
</script>

<style>
</style>