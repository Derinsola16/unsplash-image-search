<template>
  <main>
    <nav class="navbar navbar-expand-lg navbar-light border-bottom">
      <div class="container-fluid">
        <form
          class="w-50 me-3 navbar-brand d-flex"
          @submit="search"
          onsubmit="return false"
        >
          <input
            v-model="query"
            type="search"
            class="form-control border-bottom border-0 bg-white"
            placeholder="Search..."
            aria-label="Search"
          />
        </form>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="fas fa-bell fs-4"></i>
                  <span class="badge bg-danger rounded-circle p-1">3</span>
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="d-flex">
                        <img
                          src="../assets/guy.jpeg"
                          alt="mdo"
                          width="40"
                          height="40"
                          class="rounded-circle me-2"
                        />
                        <div>
                          <p class="m-0">Micheal liked you!</p>
                          <span class="valid-feedback text-muted d-inline"
                            >About 20 minutes ago</span
                          >
                        </div>
                        <i
                          class="fas fa-heart mt-3 fs-6 text-danger ms-3"
                        ></i></div
                    ></a>
                  </li>
                  <li><hr class="dropdown-divider" /></li>
                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="d-flex">
                        <img
                          src="../assets/girl.jpeg"
                          alt="mdo"
                          width="40"
                          height="40"
                          class="rounded-circle me-2"
                        />
                        <div>
                          <p class="m-0">Mary liked you!</p>
                          <span class="valid-feedback text-muted d-inline"
                            >About 30 minutes ago</span
                          >
                        </div>
                        <i
                          class="fas fa-heart mt-3 fs-6 text-muted ms-3"
                        ></i></div
                    ></a>
                  </li>

                  <li><hr class="dropdown-divider" /></li>

                  <li>
                    <a class="dropdown-item" href="#">
                      <div class="d-flex">
                        <img
                          src="../assets/man.jpeg"
                          alt="mdo"
                          width="40"
                          height="40"
                          class="rounded-circle me-2"
                        />
                        <div>
                          <p class="m-0">Gary liked you!</p>
                          <span class="valid-feedback text-muted d-inline"
                            >About 5 minutes ago</span
                          >
                        </div>
                        <i
                          class="fas fa-heart mt-3 fs-6 text-danger ms-3"
                        ></i></div
                    ></a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img
                    src="https://github.com/mdo.png"
                    alt="mdo"
                    width="40"
                    height="40"
                    class="rounded-circle"
                  />
                  <span class="ms-2">Jordan</span>
                </a>
                <ul
                  class="dropdown-menu text-small shadow"
                  aria-labelledby="dropdownUser2"
                >
                  <li><a class="dropdown-item" href="#">New project...</a></li>
                  <li><a class="dropdown-item" href="#">Settings</a></li>
                  <li><a class="dropdown-item" href="#">Profile</a></li>
                  <li><hr class="dropdown-divider" /></li>
                  <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </main>
</template>

<script>
export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    search() {
      this.$root.$refs.home.searchPhoto();
    },
  },
  created() {
    this.$root.$refs.header = this;
  },
};
</script>
