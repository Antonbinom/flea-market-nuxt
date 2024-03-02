<template>
  <h1 class="h1-cat">{{ categoryTitle }}</h1>
</template>

<script setup>
import { categories } from "@/data/categories";
const route = useRoute();

const categoryTitle = computed(() => {
  if (route.params.subcategory) {
    return categories
      .find((category) => category.path.includes(route.params.category))
      ?.subcategories.find((subcategory) =>
        subcategory.path.includes(route.params.subcategory)
      ).title;
  } else {
    return categories.find((category) => category.path === route.path)?.title;
  }
});
</script>

<style scoped>
.h1-cat {
  text-align: center;
  font-size: 16px;
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.h1-cat:before {
  content: "⁃";
  margin-right: 5px;
}
.h1-cat:after {
  content: "⁃";
  margin-left: 5px;
}
</style>
