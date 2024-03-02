<template>
  <div>{{ $route.params.category }}</div>
</template>

<script setup>
definePageMeta({
  layout: "catalog",
});
useHead({
  title: "Контакты",
});
</script>
