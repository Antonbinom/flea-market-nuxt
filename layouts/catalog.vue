<template>
  <Header />
  <Navbar />
  <Container>
    <main>
      <Categories v-if="!viewport.isLessThan('tablet')" />
      <Breadcrumbs v-if="$route.path !== '/'" />
      <CategoryTitle />
      <Subcategories />
      <slot />
    </main>
  </Container>
  <Container>
    <Footer />
  </Container>
</template>

<script setup>
const viewport = useViewport();
</script>

<style scoped>
main {
  padding-top: 35px;
  padding-bottom: 50px;
}
</style>
