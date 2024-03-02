<template>
  <nav class="menu">
    <Container>
      <ul class="menu-list">
        <li class="menu-list__item" v-for="link in menuLinks" :key="link.name">
          <NuxtLink class="menu-link" :to="link.path"
            >{{ link.text }}
          </NuxtLink>
        </li>
      </ul>
    </Container>
  </nav>
</template>

<script setup>
const menuLinks = [
  {
    name: "home",
    path: "/",
    text: "Прилавок",
  },
  {
    name: "how-buy",
    path: "/how-buy",
    text: "Как купить",
  },
  {
    name: "about",
    path: "/about",
    text: "О Нас",
  },
  {
    name: "contacts",
    path: "/contacts",
    text: "Контакты",
  },
  {
    name: "reviews",
    path: "/reviews",
    text: "Отзывы",
  },
];
</script>

<style scoped>
.menu {
  height: 30px;
  background: #232323;
  font-family: Helvetica;
  /* padding: 0px 65px; */
}
.menu-list {
  height: 30px;
  padding: 0px;
  list-style: none;
}
.menu-list__item {
  float: left;
  width: 20%;
  text-align: center;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  text-transform: uppercase;
}
.menu-link {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}
.NuxtLink-active {
  font-weight: bold;
}
</style>
