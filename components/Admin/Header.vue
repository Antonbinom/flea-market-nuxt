<template>
  <Container>
    <div>
      <NuxtLink to="/">В магазин</NuxtLink>
      <NuxtLink to="/admin/categories">Categories</NuxtLink>
      <NuxtLink to="/admin/products">Products</NuxtLink>
      <button @click="logout">Logout</button>
    </div>
  </Container>
</template>

<script setup>
const router = useRouter();

const logout = () => {
  localStorage.removeItem("admin");
  router.push("/admin/auth");
};
</script>
