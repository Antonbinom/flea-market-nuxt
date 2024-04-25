<template>
  <div class="header-wrapper">
    <nav class="header-nav">
      <NuxtLink class="header-nav__item" to="/admin/categories"
        >Categories</NuxtLink
      >
      <NuxtLink class="header-nav__item" to="/admin/products"
        >Products</NuxtLink
      >
      <NuxtLink class="header-nav__item" to="/admin/reviews">Reviews</NuxtLink>
      <NuxtLink class="header-nav__item" to="/admin/orders">Orders</NuxtLink>
      <NuxtLink class="header-nav__item" to="/admin/messages"
        >Messages</NuxtLink
      >
    </nav>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
const router = useRouter();

const logout = () => {
  localStorage.removeItem("admin");
  router.push("/admin/auth");
};
</script>

<style scoped>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  padding-top: 60px;
}

.header-nav__item {
  margin-right: 10px;
  text-decoration: none;
  color: #000;
}
</style>
