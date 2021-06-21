<template>
  <main style="height: 100vh" class="position-sticky top-0">
    <div>
      <div class="px-sm-2 px-0 border border-2">
        <div
          class="
            d-flex
            flex-column
            align-items-center align-items-sm-start
            px-3
            pt-3
            text-white
            min-vh-100
          "
        >
          <ul
            class="
              nav nav-pills
              flex-column
              mb-sm-auto mb-0
              align-items-center align-items-sm-start
              mt-4
            "
            id="menu"
          >
            <li class="text-center nav-item mb-5">
              <div class="nav-link align-middle px-0 d-flex">
                <img
                  src="../assets/images.jpeg"
                  alt=""
                  class="rounded-circle me-2"
                  width="50"
                  height="50"
                />
                <h4 class="mt-2 fs-3 text-primary ms-3 d-none d-sm-inline">
                  Splash
                </h4>
              </div>
            </li>

            <li>
              <a
                href="#"
                class="nav-link text-primary align-middle px-0 mb-4"
              >
                <i class="fas fa-home fs-4"></i>
                <span class="ms-3 d-none d-sm-inline">Home</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-muted px-0 align-middle mb-4">
                <i class="fas fa-sticky-note fs-4"></i>
                <span class="ms-3 d-none d-sm-inline">Orders</span></a
              >
            </li>
            <strong class="mt-2 mb-3 text-dark">SHARE</strong>

            <li>
              <a href="#" class="nav-link text-muted px-0 align-middle mb-4">
                <i class="fs-4 fas fa-gifts"></i>
                <span class="ms-3 d-none d-sm-inline">Party</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-muted px-0 align-middle mb-4">
                <i class="fs-4 fas fa-link"></i>
                <span class="ms-3 d-none d-sm-inline">Connect</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-muted px-0 align-middle">
                <i class="fs- fas fa-users"></i>
                <span class="ms-3 d-none d-sm-inline">Group</span>
              </a>
            </li>
          </ul>
          <hr />
          <div class="dropdown pb-4 bottom-0 postition-sticky">
            <a
              href="#"
              class="
                d-flex
                align-items-center
                text-white text-decoration-none
                dropdown-toggle
              "
              id="dropdownUser1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="hugenerd"
                width="30"
                height="30"
                class="rounded-circle"
              />
              <span class="d-none d-sm-inline mx-1">loser</span>
            </a>
            <ul class="dropdown-menu dropdown-menu-muted text-small shadow">
              <li><a class="dropdown-item" href="#">New project...</a></li>
              <li><a class="dropdown-item" href="#">Settings</a></li>
              <li><a class="dropdown-item" href="#">Profile</a></li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li><a class="dropdown-item" href="#">Sign out</a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- <div class="col py-3">Content area...</div> -->
    </div>
  </main>
</template>
<script>
export default {
  name: "Sidebar",
  components: {},
  data() {
    return {};
  }
};
</script>

<style scoped>
</style>
