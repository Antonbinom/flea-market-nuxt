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
import { products } from "@/data/products";
</script>
