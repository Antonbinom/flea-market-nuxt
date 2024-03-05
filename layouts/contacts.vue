<template>
  <Header />
  <Navbar />
  <main>
    <Container>
      <Breadcrumbs />
    </Container>
    <slot />
  </main>
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
