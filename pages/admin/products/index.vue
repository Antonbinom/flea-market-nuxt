<template>
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
  <AdminProducts :products="filteredProducts" />
  <div class="product-buttons">
    <button
      class="product-btn product-btn__change"
      @click="$router.push('/admin/products/add')"
    >
      Добавить товар
    </button>
  </div>
</template>
<script setup>
definePageMeta({
  layout: "admin",
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
.product-buttons {
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  width: 100%;
  padding-block: 30px;
  background-color: #fff;
}
.product-btn {
  padding-block: 10px;
  text-transform: uppercase;
  font-size: 12px;
  text-align: center;
  font-family: Arial;
  letter-spacing: 0.6px;
  color: #000;
  -webkit-transition: color 0.3s;
  -o-transition: color 0.3s;
  -moz-transition: color 0.3s;
  text-decoration: none;

  border-radius: 10px;
  border: 1px solid #000;
  background: #fff;
  cursor: pointer;

  transition: color 0.3s;
}
.product-btn:not(:disabled):hover {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: rgba(0, 0, 0, 0.7);
  color: #fff;
}
.product-btn:disabled {
  background: #999;
  border: none;
}
.product-btn__delete {
  background-color: rgb(237, 45, 45);
  color: #ffffff;
  border: none;
}

.search-wrp {
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

.query {
  padding: 10px;
  width: 100%;
  max-width: 970px !important;
  /* margin: 0px auto; */
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
  position: relative;
}
.query input {
  width: 100%;
  height: 18px;
  padding: 0px;
  font-size: 14px;
  font-family: "Anglecia Pro Display";
  line-height: 18px;
  letter-spacing: 1.1px;
  border: none;
}
.query input:focus {
  outline: none;
}
.query span {
  position: absolute;
  right: 0px;
  top: 50%;
  margin-top: -15px;
  width: 20px;
  height: 24px;
  cursor: pointer;
}
.query span svg {
  width: 20px;
  height: 20px;
}

.search-svg-style,
.de--search__search-icons--stroke {
  stroke: #000;
}

@media (max-width: 767.98px) {
  .search-wrp {
    padding: 30px 15px;
  }
  .close {
    right: 15px;
    top: 10px;
  }
  .close img {
    width: 18px;
    height: 18px;
  }
  .result-count {
    padding: 30px 0px;
  }
}
</style>
