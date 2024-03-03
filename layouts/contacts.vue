<template>
  <div>
    <Header />
    <Navbar />
    <main>
      <Container>
        <Breadcrumbs />
      </Container>
      <slot />
    </main>
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
