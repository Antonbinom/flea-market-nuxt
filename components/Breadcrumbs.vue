<template>
  <ol class="breadcrumb" itemtype="http://schema.org/BreadcrumbList">
    <li class="breadcrumb-item">
      <NuxtLink to="/">
        Прилавок
        <meta itemprop="name" content="Прилавок" />
      </NuxtLink>
    </li>

    <li
      class="breadcrumb-item"
      v-for="point in currentProduct()"
      :key="point.name"
    >
      <NuxtLink :to="point.path" v-if="point.path">
        {{ point.name }}
      </NuxtLink>
      <span v-if="!point.path">{{ point.name }}</span>
    </li>
  </ol>
</template>

<script setup>
import { categories } from "@/data/categories";
import { menuLinks } from "@/data/menuLinks";
import { products } from "@/data/products";

const route = useRoute();

const currentProduct = () => {
  if (route.path.includes("product")) {
    const product = products.find((product) => product.path === route.path);
    return [
      {
        path: `/catalog/${product.category[0]}`,
        name: product.category[1],
      },
      ...(product.subcategory
        ? [
            {
              path: `/catalog/${product.category[0]}/${product.subcategory[0]}`,
              name: product.subcategory[1],
            },
          ]
        : []),
      {
        name: product?.title,
      },
    ];
  }
  if (route.path.includes("catalog")) {
    const category = categories.find((item) =>
      item.path.includes(route.params.category)
    );
    const subcategory = category?.subcategories?.find((sc) =>
      sc.path.includes(route.params.subcategory)
    );
    return [
      {
        path: subcategory ? category?.path : "",
        name: category?.name,
      },
      ...(subcategory
        ? [
            {
              name: subcategory?.name,
            },
          ]
        : []),
    ];
  }
  const currentPage = menuLinks.find((link) => link.path === route.path);
  return [
    {
      name: currentPage?.title,
    },
  ];
};
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
