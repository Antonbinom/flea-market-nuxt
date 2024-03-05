<template>
  <Header />
  <Navbar />
  <Container>
    <main>
      <Breadcrumbs />

      <slot />
    </main>
  </Container>
  <Form />
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
