<template>
  <Header />
  <Navbar />
  <Container>
    <main>
      <Categories />
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

<style scoped>
main {
  padding-top: 35px;
  padding-bottom: 50px;
}
</style>
