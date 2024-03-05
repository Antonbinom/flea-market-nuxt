<template>
  <Products :products="filteredProducts" />
</template>

<script setup>
import { products } from "~/data/products";
const route = useRoute();
const filteredProducts = computed(() => {
  return products.filter((product) => {
    return (
      product.category[0] === route.params.category &&
      product.subcategory?.[0] === route.params.subcategory
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
