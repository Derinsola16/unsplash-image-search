<template>
  <main class="mt-4 container">
    <div class="row">
      <div
        class="col-lg-4 mb-4 col-md-12 mb-lg-0"
        v-for="image in imageUrl.results || imageUrl"
        :key="image"
      >
        <img
          :src="image.urls.regular"
          class="w-100 shadow-1-strong rounded mb-4"
          alt=""
        />
      </div>
    </div>
  </main>
</template>

<script>
import { getPhoto, getRandomPhoto } from "../services/unsplash";
export default {
  name: "home",
  data: () => ({
    unsplashData: null,
  }),
  computed: {
    imageUrl() {
      if (this.unsplashData) {
        return this.unsplashData;
      }
      return null;
    },
  },
  methods: {
    Photo() {
      getPhoto().then((res) => {
        console.log(res);
        this.unsplashData = res;
      });
    },
    searchPhoto() {
      const param = {
        featured: true,
        query: this.$root.$refs.header.$data.query,
      };
      getRandomPhoto(param).then((res) => {
        console.log(res);
        this.unsplashData = res;
      });
    },
  },
  mounted() {
    this.Photo();
    this.$root.$refs.home = this;
  },
};
</script>

<style></style>
