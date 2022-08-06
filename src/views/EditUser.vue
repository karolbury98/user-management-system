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
        <form>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Name" />
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Username" />
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="E-mail" />
          </div>
          <div class="mb-2">
            <input
              type="number"
              class="form-control"
              placeholder="Phone number"
            />
          </div>
          <div class="mb-2">
            <input type="text" class="form-control" placeholder="Avatar URL" />
          </div>
          <div class="mb-2">
            <input type="submit" class="btn btn-success" value="Edit" />
          </div>
        </form>
      </div>
      <div class="col-md-4">
        <img src="" alt="avatar" class="user-img">
      </div>
    </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>