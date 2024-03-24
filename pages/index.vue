<template>
  <Products :products="products" />
</template>

<script setup>
definePageMeta({
  layout: "catalog",
});
useHead({
  title: "ВИНТАЖНЫЕ НАХОДКИ С БЛОШИНЫХ РЫНКОВ РАЗНЫХ СТРАН",
});

const products = await useFetchProducts();
</script>
