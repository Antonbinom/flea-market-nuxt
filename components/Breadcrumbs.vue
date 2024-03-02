<template>
  <ol class="breadcrumb" itemtype="http://schema.org/BreadcrumbList">
    <li class="breadcrumb-item">
      <NuxtLink to="/">
        Прилавок
        <meta itemprop="name" content="Прилавок" />
      </NuxtLink>
    </li>
    <li class="breadcrumb-item" v-if="!$route.params.category">
      <span>{{ currentPage }}</span>
    </li>
    <li class="breadcrumb-item" v-if="$route.params.category">
      <NuxtLink :to="currentCategory.path" v-if="$route.params.subcategory">
        {{ currentCategory.name }}
      </NuxtLink>
      <span v-else>{{ currentCategory.name }}</span>
    </li>
    <li
      class="breadcrumb-item"
      v-if="$route.params.subcategory && currentSubcategory"
    >
      {{ currentSubcategory.name }}
    </li>
  </ol>
</template>

<script setup>
import { categories } from "@/data/categories";
import { menuLinks } from "@/data/menuLinks";
import { products } from "@/data/products";

const route = useRoute();

const currentPage = computed(() => {
  if (route.params.category) return;
  if (route.path.includes("product")) {
    return products.find((product) => product.path === route.path);
  }
  return menuLinks.find((item) => item.path === route.path).title;
});

const currentCategory = computed(() => {
  return categories.find((category) =>
    category.path.includes(route.params.category)
  );
});

const currentSubcategory = computed(() => {
  if (!currentCategory.value.subcategories) return;
  return currentCategory.value?.subcategories.find((subcategory) =>
    subcategory.path.includes(route.params.subcategory)
  );
});
</script>

<style>
.breadcrumb {
  margin: 0px 0px 15px 0px;
  padding: 0px;
  list-style: none;
  font-size: 13px;
  line-height: 130%;
  display: block;
  overflow: hidden;
  color: #000;
  padding-right: 48%;
}
.breadcrumb-item {
  display: inline;
}
.breadcrumb-item:before {
  content: ">";
  margin: 0px 8px;
}
.breadcrumb-item:first-child:before {
  display: none;
}
.breadcrumb-item a {
  text-decoration: none;
  color: #000;
}
</style>
