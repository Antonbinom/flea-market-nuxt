<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
.container {
  padding: 0px 65px;
  margin: 0px auto;
  max-width: 87%;
}
@media (max-width: 767.98px) {
  .container {
    margin: 0px;
    padding: 0px 15px;
    max-width: 100%;
  }
}
</style>
