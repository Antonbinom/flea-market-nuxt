<template>
  <ul class="categories">
    <li class="categories-item">
      <NuxtLink to="/" class="categories-item__link">Все товары</NuxtLink>
    </li>
    <li
      v-for="category in categories"
      :key="category.path"
      class="categories-item"
    >
      <NuxtLink
        :to="`/catalog/${category.path}`"
        class="categories-item__link"
        >{{ category.name }}</NuxtLink
      >
    </li>
  </ul>
</template>

<script setup>
const route = useRoute();

const { data: categories } = await useFetchCategories();

const currentCategory = computed(() => {
  return categories.value.find((item) => item.path === route.params.category);
});

const currentCategoryState = useCurrentCategory(currentCategory.value);

watch(
  () => currentCategory.value,
  () => (currentCategoryState.value = currentCategory.value)
);

onMounted(() => {
  currentCategoryState.value = currentCategory.value;
});
</script>

<style scoped>
.categories {
  margin: 0px 0px 35px 0px;
  padding: 0px;
  list-style: none;
  text-align: center;
}
.categories-item {
  font-size: 12px;
  padding: 0 12px;
  display: inline-block;
}
.categories-item__link {
  letter-spacing: 0.05em;
  line-height: 20px;
  color: rgba(117, 117, 117, 1);
  text-decoration: none;
  font-weight: 400;
}
.categories-item__link:hover {
  color: #555;
}
.categories-item__link.router-link-active {
  color: #555;
  font-weight: bold;
}
</style>
