<template>
  <div class="categories">
    <div
      v-for="category in categories"
      :key="category.path"
      class="categories-item"
    >
      <NuxtLink
        :to="`/admin/categories/${category.id}`"
        class="categories-item__link"
        >{{ category.name }}</NuxtLink
      >
      <button @click="deleteCategory(category.id)">delete</button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const { data: categories } = await useFetchCategories();

const deleteCategory = (id) => {
  fetch(`/api/category/${id}`, {
    method: "DELETE",
  });
};
</script>
