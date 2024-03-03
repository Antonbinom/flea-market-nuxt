<template>
  <div>
    <Container>
      <main>
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
