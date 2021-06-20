<template>
  <main style="height: 100vh" class="position-sticky top-0"> 
    <!--  -->
    <!-- col-auto col-md-3 col-xl-2 row flex-nowrap -->
    <div class="">
      <div class=" px-sm-2 px-0 border border-2">
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
              text-dark
            "
            id="menu"
          >
            <li class="text-center nav-item mb-3">
              <div class="nav-link align-middle px-0 d-flex">
                <img
                  src="../assets/images.jpeg"
                  alt=""
                  class="rounded-circle me-2"
                  width="50"
                  height="50"
                />
                <h4 class="mt-2 fs-3 text-dark ms-3 d-none d-sm-inline">
                  Splash
                </h4>
              </div>
            </li>

            <li class="nav-item">
              <a
                href="#"
                class="nav-link text-dark align-middle px-0"
                :class="{
                  activ: currentRoute == 'Home',
                }"
              >
                <i class="fas fa-home fs-4"></i>
                <span class="ms-3 d-none d-sm-inline">Home</span>
              </a>
            </li>
            <!-- <li>
                        <a href="#submenu1" data-bs-toggle="collapse" class="nav-link text-dark px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-3 d-none d-sm-inline">Dashboard</span> </a>
                        <ul class="collapse show nav flex-column ms-3" id="submenu1" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link text-dark px-0"> <span class="d-none d-sm-inline">Item</span> 1 </a>
                            </li>
                            <li>
                                <a href="#" class="nav-link text-dark px-0"> <span class="d-none d-sm-inline">Item</span> 2 </a>
                            </li>
                        </ul>
                    </li> -->

            <li>
              <a href="#" class="nav-link text-dark px-0 align-middle">
                <i class="fas fa-sticky-note fs-4"></i>
                <span class="ms-3 d-none d-sm-inline">Orders</span></a
              >
            </li>
            <strong class="mt-4">SHARE</strong>

            <li>
              <a href="#" class="nav-link text-dark px-0 align-middle">
                <i class="fs-4 fas fa-gifts"></i>
                <span class="ms-3 d-none d-sm-inline">Party</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-dark px-0 align-middle">
                <i class="fs-4 fas fa-link"></i>
                <span class="ms-3 d-none d-sm-inline">Connect</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-dark px-0 align-middle">
                <i class="fs- fas fa-users"></i>
                <span class="ms-3 d-none d-sm-inline">Group</span>
              </a>
            </li>
          </ul>
          <hr />
          <div class="dropdown pb-4">
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
            <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
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
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
};
</script>

<style scoped>
.activ {
  color: #5593f6 !important;
}
</style>
