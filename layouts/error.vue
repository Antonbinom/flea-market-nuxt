<template>
  <div>
    <Header />
    <Navbar />
    <Container>
      <main>
        <slot />
      </main>
    </Container>
    <Container class="container">
      <Footer />
    </Container>
  </div>
</template>

<style scoped>
main {
  padding-top: 35px;
  padding-bottom: 50px;
}
</style>
