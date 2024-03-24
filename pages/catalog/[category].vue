<template>
  <Products :products="filteredProducts" />
</template>

<script setup>
const products = await useFetchProducts();
const category = useCurrentCategory();

const filteredProducts = computed(() => {
  return products.value.filter(
    (product) => product.categoryId === category.value?.id
  );
});

definePageMeta({
  layout: "catalog",
});
useHead({
  title: "Контакты",
});
</script>
