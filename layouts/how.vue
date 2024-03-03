<template>
  <div>
    <Header />
    <Navbar />
    <Container>
      <main>
        <Breadcrumbs />

        <slot />
      </main>
    </Container>
    <Form />
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
