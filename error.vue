<template>
  <NuxtLayout name="error">
    <div class="error">
      <strong>{{ `Ошибка 404 - Страница ${$route.path} не найдена!` }}</strong
      ><br /><br />
      Вы перешли на несуществующую страницу!<br /><br />
      <NuxtLink to="/">Вернуться на главную</NuxtLink>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.error {
  text-align: center;
  padding: 100px 0px;
}
</style>
