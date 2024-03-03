<template>
  <nav class="menu">
    <Container>
      <ul class="menu-list">
        <li class="menu-list__item" v-for="link in menuLinks" :key="link.name">
          <NuxtLink class="menu-link" :to="link.path"
            >{{ link.title }}
          </NuxtLink>
        </li>
      </ul>
    </Container>
  </nav>
</template>

<script setup>
import { menuLinks } from "@/data/menuLinks";
</script>

<style scoped>
.menu {
  height: 30px;
  background: #232323;
  font-family: Helvetica;
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
