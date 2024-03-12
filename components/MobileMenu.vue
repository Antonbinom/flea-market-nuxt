<template>
  <div class="mobile-menu">
    <div class="close" @click="isOpen = false">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <path
          class="close-menu-burger"
          fill="none"
          fill-rule="evenodd"
          stroke="#fff"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="M9 9.5l8-8-8 8-8-8 8 8zm0 0l8 8-8-8-8 8 8-8z"
        ></path>
      </svg>
    </div>
    <Transition name="fade">
      <div
        v-if="isCategoriesOpen"
        @click="isCategoriesOpen = !isCategoriesOpen"
        class="back"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="12"
          viewBox="0 0 25 12"
        >
          <g
            fill="none"
            fill-rule="evenodd"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          >
            <path class="de--menu-color" d="M6 11L1 6l5-5M2 6h22"></path>
          </g>
        </svg>
      </div>
    </Transition>

    <ul v-if="!isCategoriesOpen" class="main">
      <li
        class="main-item"
        :class="`${$route.path === '/' ? 'active' : ''} `"
        @click="isCategoriesOpen = !isCategoriesOpen"
      >
        <NuxtLink>
          {{ menuLinks[0].title }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="7"
            height="12"
            viewBox="0 0 7 12"
          >
            <path
              class="de--menu-color"
              fill="none"
              fill-rule="evenodd"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M1 11l5-5-5-5"
            ></path>
          </svg>
        </NuxtLink>
      </li>
      <li
        class="main-item"
        :class="`${$route.path === link.path ? 'active' : ''} `"
        @click="isOpen = false"
        v-for="(link, index) in menuLinks.slice(1, -1)"
        :key="link.name"
      >
        <NuxtLink
          :to="link.path"
          class="catalog"
          :style="`transition-delay: ${80 * index + 2}ms`"
          >{{ link.title }}
        </NuxtLink>
      </li>
    </ul>
    <Transition name="fade" mode="out-in">
      <ul v-if="isCategoriesOpen" class="catalog">
        <li class="catalog-item parent">
          <NuxtLink
            @click="isOpen = false"
            to="/"
            style="transition-delay: 80ms"
            >Прилавок</NuxtLink
          >
          <ul>
            <li
              @click="isOpen = false"
              v-for="(category, index) in categories?.slice(1)"
              :key="category.path"
              class="catalog-item children active"
            >
              <NuxtLink
                :to="category.path"
                :style="`transition-delay: ${80 * index + 2}ms`"
                >{{ category.name }}</NuxtLink
              >
            </li>
          </ul>
        </li>
      </ul>
    </Transition>
  </div>
</template>

<script setup>
import { menuLinks } from "@/data/menuLinks";
import { categories } from "@/data/categories";
const isCategoriesOpen = ref(false);
const isOpen = useOpenMenu();
</script>

<style scoped>
.mobile-menu {
  position: fixed;
  /* opacity: 0; */
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  overflow: hidden;
  overflow-y: auto;
  z-index: 10;
  padding: 100px 40px 100px 0;
  background: #fff;
  -webkit-overflow-scrolling: touch;
}
.close {
  position: fixed;
  right: 18px;
  top: 27.5px;
}
.back {
  /* display: none;
  opacity: 0; */
  position: absolute;
  top: 27.5px;
  left: 20px;
}

.close-menu-burger {
  stroke: rgba(0, 0, 0, 1);
  stroke-width: 1.5px;
  mix-blend-mode: difference;
}

.main,
.catalog {
  margin: 0px;
  /* padding: 0px 0px 0px 40px; */
  list-style: none;
  font-size: 12px;
  line-height: 16px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  /* display: none; */
}
.main-item {
  padding: 15px 0px;
}
.main-item a {
  display: inline-block;
  /* -webkit-transform: translateX(-25px);
  -moz-transform: translateX(-25px);
  -ms-transform: translateX(-25px);
  -o-transform: translateX(-25px);
  transform: translateX(-25px); */
  /* opacity: 0; */
  /* -webkit-transition: opacity 0.2s linear 50ms,
    -webkit-transform 150ms ease-in 50ms; */
  /* transition: opacity 0.2s linear 50ms, -webkit-transform 150ms ease-in 50ms;
  -o-transition: opacity 0.2s linear 50ms, -o-transform 150ms ease-in 50ms;
  -moz-transition: opacity 0.2s linear 50ms, transform 150ms ease-in 50ms,
    -moz-transform 150ms ease-in 50ms;
  transition: opacity 0.2s linear 50ms, transform 150ms ease-in 50ms;
  transition: opacity 0.2s linear 50ms, transform 150ms ease-in 50ms,
    -webkit-transform 150ms ease-in 50ms, -moz-transform 150ms ease-in 50ms; */
  /* -o-transform 150ms ease-in 50ms; */
}
.main-item.active a {
  /* opacity: 1; */
  /* -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -ms-transform: translateX(0);
  -o-transform: translateX(0);
  transform: translateX(0); */
}
.main-item a {
  color: #000;
  text-decoration: none;
}

.main-item svg {
  vertical-align: middle;
  margin-left: 8px;
  margin-bottom: 5px;
}
.de--menu-color {
  stroke: rgba(0, 0, 0, 1);
}

.main-item .de--menu-color {
  stroke: #ccc;
}
.main-item.active a {
  color: #ccc;
}

.catalog-item li {
  padding: 15px 0px;
}
.catalog-item .children a {
  display: inline-block;
  /* -webkit-transform: translateX(-25px);
  -moz-transform: translateX(-25px);
  -ms-transform: translateX(-25px);
  -o-transform: translateX(-25px);
  transform: translateX(-25px); */
  /* opacity: 0; */
  /* -webkit-transition: opacity 0.2s linear 50ms,
    -webkit-transform 150ms ease-in 50ms;
  transition: opacity 0.2s linear 50ms, -webkit-transform 150ms ease-in 50ms;
  -o-transition: opacity 0.2s linear 50ms, -o-transform 150ms ease-in 50ms;
  -moz-transition: opacity 0.2s linear 50ms, transform 150ms ease-in 50ms,
    -moz-transform 150ms ease-in 50ms;
  transition: opacity 0.2s linear 50ms, transform 150ms ease-in 50ms;
  transition: opacity 0.2s linear 50ms, transform 150ms ease-in 50ms,
    -webkit-transform 150ms ease-in 50ms, -moz-transform 150ms ease-in 50ms,
    -o-transform 150ms ease-in 50ms; */
}
/* .catalog-item.children.active a {
  opacity: 1;
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -ms-transform: translateX(0);
  -o-transform: translateX(0);
  transform: translateX(0);
} */
.catalog-item a {
  color: #000;
  text-decoration: none;
}

.catalog-item ul {
  list-style: none;
  padding-left: 20px;
  margin: 10px 0px 0px 0px;
  text-transform: none;
}
.catalog-item ul li {
  padding: 10px 0px;
}
</style>
