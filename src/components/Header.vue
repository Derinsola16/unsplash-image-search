<template>
  <main class="position-relative">
    <div class="border-bottom">
      <div class="d-flex justify-content-between p-3">
        <div class="d-flex">
          <i class="fas fa-search mt-2 text-muted"></i>
          <input
            style="width: 240px; background: transparent"
            type="text"
            class="form-control border-0"
            id="search"
            placeholder="Search therapist"
          />
        </div>
        <img
          src="../assets/girl.jpeg"
          width="36"
          height="36"
          class="float-end rounded-circle"
        />
      </div>
    </div>
    <div class="px-3">
      <div class="d-flex justify-content-between border-bottom p-3">
        <span class="mt-2">{{ currentPage }}</span>
        <div>
          <button
            type="button"
            class="btn btn-outline-primary me-2"
            data-bs-toggle="modal"
            data-bs-target="#inviteTherapistModal"
          >
            Edit
          </button>
          <button
            data-bs-toggle="modal"
            data-bs-target="#inviteLinkModal" hidden>
          </button>
          <button
            type="button"
            class="btn btn-primary me-2"
            @click="getInviteLink"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>

    <!-- <div class="d-flex justify-content-between">
        <div>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb mb-0">
              <li class="breadcrumb-item">
                <a href="#" class="text-decoration-none"><small>Therapist</small></a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                <small>Invite Therapist</small>
              </li>
            </ol>
          </nav>
          <p class="m-0">Invite Therapist</p>
        </div>
      </div> -->
  </main>
</template>
