<template>
  <div>{{ $route.params.subcategory }}</div>
</template>

<script setup>
definePageMeta({
  layout: "catalog",
});
useHead({
  title: "Контакты",
});
</script>
