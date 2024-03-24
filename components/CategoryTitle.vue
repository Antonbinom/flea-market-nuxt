<template>
  <h1 class="h1-cat">{{ title }}</h1>
</template>

<script setup>
const route = useRoute();
const category = useCurrentCategory();

const title = computed(() => {
  if (!route.params.category) {
    return "Винтажные находки с блошиных рынков разных стран";
  } else if (route.params.subcategory) {
    return category.value?.subcategories?.find(
      (subcategory) => subcategory.path === route.params.subcategory
    )?.title;
  } else {
    return category.value?.title;
  }
});
</script>

<style scoped>
.h1-cat {
  text-align: center;
  font-size: 16px;
  font-weight: normal;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.h1-cat:before {
  content: "⁃";
  margin-right: 5px;
}
.h1-cat:after {
  content: "⁃";
  margin-left: 5px;
}
</style>
