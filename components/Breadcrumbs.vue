<template>
  <ol class="breadcrumb">
    <li class="breadcrumb-item">
      <NuxtLink to="/">
        Прилавок
        <meta itemprop="name" content="Прилавок" />
      </NuxtLink>
    </li>

    <li
      class="breadcrumb-item"
      v-for="point in breadcrumbsPoints"
      :key="point.name"
    >
      <NuxtLink
        :to="
          point.path === currentCategory?.path
            ? '/catalog/' + point.path
            : point.path
        "
        v-if="point.path"
      >
        {{ point.name }}
      </NuxtLink>
      <span v-if="!point.path">{{ point.name }}</span>
    </li>
  </ol>
</template>

<script setup>
import { computedAsync } from "@vueuse/core";
import { menuLinks } from "@/data/menuLinks";
const route = useRoute();
const currentCategory = useCurrentCategory();

const currentPageBreadcrumbs = () => {
  const currentPage = menuLinks.find((link) => link.path === route.path);
  return [
    {
      name: currentPage?.title,
    },
  ];
};
const catalogBreadcrumbs = () => {
  const subcategory = currentCategory.value?.subcategories?.find((sc) =>
    sc.path.includes(route.params.subcategory)
  );
  return [
    {
      path: subcategory ? currentCategory.value?.path : "",
      name: currentCategory.value?.name,
    },
    ...(subcategory
      ? [
          {
            name: subcategory?.name,
          },
        ]
      : []),
  ];
};

const productBreadcrumbs = async () => {
  const product = await useFetchProductByName(route.params.name);
  const category = await useFetchCategoryByName(product.value.categoryId);
  return [
    {
      path: `/catalog/${category.value.path}`,
      name: category.value.name,
    },
    ...(product.subcategory
      ? [
          {
            path: `/catalog/${category.value.path}/${product.subcategory}`,
            name: product.subcategory,
          },
        ]
      : []),
    {
      name: product.value?.title,
    },
  ];
};

const breadcrumbsPoints = computedAsync(
  async () => {
    if (route.path.includes("/product/")) {
      return productBreadcrumbs();
    }
    if (route.path.includes("/catalog")) {
      return catalogBreadcrumbs();
    }
    return currentPageBreadcrumbs();
  },
  null // initial state
);
</script>

<style>
.breadcrumb {
  margin: 0px 0px 15px 0px;
  padding: 0px;
  list-style: none;
  font-size: 13px;
  line-height: 130%;
  display: block;
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

@media (max-width: 767.98px) {
  .breadcrumb {
    font-size: 12px;
    padding-right: 0px;
  }
}
</style>
