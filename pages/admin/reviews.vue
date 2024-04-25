<template>
  <div class="reviews">
    <img src="@/assets/review1.jpg" alt="" class="loaded" />
    <img src="@/assets/review2.jpg" alt="" class="loaded" />
    <img src="@/assets/review3.jpg" alt="" class="loaded" />
    <img src="@/assets/review4.jpg" alt="" class="loaded" />
    <img src="@/assets/review1.jpg" alt="" class="loaded" />
    <img src="@/assets/review2.jpg" alt="" class="loaded" />
    <img src="@/assets/review3.jpg" alt="" class="loaded" />
    <img src="@/assets/review4.jpg" alt="" class="loaded" />
    <img src="@/assets/review1.jpg" alt="" class="loaded" />
    <img src="@/assets/review2.jpg" alt="" class="loaded" />
    <img src="@/assets/review3.jpg" alt="" class="loaded" />
    <img src="@/assets/review4.jpg" alt="" class="loaded" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
</script>

<style>
.reviews {
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.reviews img {
  width: 100%;
}
</style>
