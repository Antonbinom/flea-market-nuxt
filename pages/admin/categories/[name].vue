<template>
  <div>{{ $route.params.name }}</div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
</script>
