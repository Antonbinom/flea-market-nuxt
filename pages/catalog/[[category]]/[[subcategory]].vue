<template>
  <Products :products="filteredProducts" />
</template>

<script setup>
import { products } from "~/data/products";
const route = useRoute();
const filteredProducts = computed(() => {
  return products.filter((product) => {
    return (
      product.category === route.params.category &&
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
