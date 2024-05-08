<template>
  <div id="search" style="display: block; opacity: 1">
    <div class="search-wrp">
      <NuxtLink to="/" class="close">
        <img src="@/assets/close.png" alt="Закрыть" />
      </NuxtLink>
      <div class="query">
        <input
          v-model="inputValue"
          type="text"
          placeholder="Что будем искать?"
          autocomplete="off"
          @keydown.enter="setSeachValue"
        />
        <span @click="setSeachValue">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.5 17.5">
            <ellipse
              class="search-svg-style de--search__search-icons--stroke"
              cx="5.92"
              cy="8.01"
              rx="5.17"
              ry="5.13"
            ></ellipse>
            <line
              class="search-svg-style de--search__search-icons--stroke"
              x1="9.59"
              y1="11.64"
              x2="14.75"
              y2="16.75"
            ></line>
          </svg>
        </span>
      </div>
      <div v-if="searchValue" class="result">
        <div class="result-count">
          {{ filteredProducts.length }} результатов
        </div>
        <Products :products="filteredProducts" />
      </div>
      <Container v-if="searchValue" class="container">
        <Footer />
      </Container>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "search",
});
const products = await useFetchProducts();

const inputValue = ref("");
const searchValue = ref("");
const setSeachValue = () => {
  if (searchValue.value === inputValue.value) return;
  searchValue.value = inputValue.value;
};
const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    if (product.description) {
      return product.description.some((item) =>
        item.toLowerCase().includes(searchValue.value.toLowerCase())
      );
    }
    return product.title
      .toLowerCase()
      .includes(searchValue.value.toLowerCase());
  });
});
</script>

<style scoped>
.container {
  width: 100%;
}
#search {
  /* display: none; */
  position: fixed;
  opacity: 0;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 10;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  background: #fff;
  -webkit-overflow-scrolling: touch;
}
#search .search-wrp {
  position: absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 40px 30px;
}
#search .close {
  position: absolute;
  right: 30px;
  top: 30px;
  z-index: 15;
  cursor: pointer;
}
#search .close img {
  width: 18px;
  height: 18px;
}
.query {
  padding: 22px 33px 22px 0px;
  width: 100%;
  max-width: 970px !important;
  margin: 0px auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  position: relative;
}
.query input {
  width: 100%;
  height: 21px;
  line-height: 21px;
  padding: 0px;
  border: none;
  font-size: 17px;
  letter-spacing: 1.1px;
  font-family: "Anglecia Pro Display";
}
.query input:focus {
  outline: none;
}
#search .query span {
  position: absolute;
  right: 0px;
  top: 50%;
  margin-top: -15px;
  width: 26px;
  height: 30px;
  cursor: pointer;
}
#search .query span svg {
  width: 26px;
  height: 29px;
}
#search .result {
  width: 100%;
  max-width: 970px !important;
  margin: 0px auto;
  padding-bottom: 30px;
}
#search .result-count {
  font-size: 13px;
  padding-top: 70px;
  padding-bottom: 55px;
}
#search footer {
  margin-top: 30px;
  padding-top: 20px;
  padding-bottom: 30px;
}

#search .search-svg-style,
#search .de--search__search-icons--stroke {
  stroke: #000;
}

@media (max-width: 767.98px) {
  #search .search-wrp {
    padding: 30px 15px;
  }
  #search .close {
    right: 15px;
    top: 10px;
  }
  #search .close img {
    width: 18px;
    height: 18px;
  }
  #search .result-count {
    padding: 30px 0px;
  }
}
</style>
