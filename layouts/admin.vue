<template>
  <Container>
    <AdminHeader />
    <main>
      <slot />
    </main>
  </Container>
</template>

<style scoped>
main {
  padding-top: 35px;
  padding-bottom: 50px;
}
</style>
