<template>
  <Products :products="filteredProducts" />
</template>

<script setup>
const products = await useFetchProducts();
const category = useCurrentCategory();

const route = useRoute();
const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    return (
      product.categoryId === category.value?.id &&
      product.subcategory === route.params.subcategory
    );
  });
});

definePageMeta({
  layout: "catalog",
});
useHead({
  title: "Контакты",
});
</script>
