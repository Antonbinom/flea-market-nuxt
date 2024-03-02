<template>
  <div>
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
    <Footer />
  </div>
</template>

<style scoped>
main {
  padding-top: 35px;
  padding-bottom: 50px;
  overflow: hidden;
}
</style>
