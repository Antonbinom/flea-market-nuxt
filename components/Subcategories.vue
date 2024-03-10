<template>
  <ul v-if="subcategories" class="subcategories">
    <li
      v-for="subcategory in subcategories"
      :key="subcategory"
      class="subcategories-item"
    >
      <NuxtLink :to="subcategory.path" class="subcategories-item__link">{{
        subcategory.name
      }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup>
import { categories } from "@/data/categories";
const route = useRoute();

const subcategories = computed(() => {
  return categories.find((category) =>
    category.path.includes(route.params.category)
  )?.subcategories;
});
</script>

<style scoped>
.subcategories {
  margin: 0px 0px 35px 0px;
  padding: 0px;
  list-style: none;
  text-align: center;
}
.subcategories-item {
  font-size: 12px;
  padding: 0 12px;
  display: inline-block;
}
.subcategories-item__link {
  letter-spacing: 0.05em;
  line-height: 1em;
  color: rgba(117, 117, 117, 1);
  text-decoration: none;
  font-weight: 400;
}
.subcategories-item__link:hover {
  color: #555;
}
.subcategories-item__link.router-link-active {
  color: #555;
  font-weight: bold;
}

@media (max-width: 767.98px) {
  .subcategories {
    text-align: left;
  }
}
</style>
