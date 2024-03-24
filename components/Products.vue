<template>
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <NuxtLink
        class="product-link"
        :to="`/product/${product.path}`"
        :title="product.title"
      >
        <span class="product-image">
          <img
            src="@/assets/product.jpg"
            class="desktop loaded"
            :alt="product.title"
          />
        </span>
        <span class="product-info">
          <span class="middle">
            <span class="product-title">{{ product.text }}</span>
            <span class="product-price">{{ product.price }} руб.</span>
          </span>
        </span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  products: Array,
});
</script>

<style scoped>
.products {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.product-link {
  display: block;
  position: relative;
}
.product-image {
  display: block;
  width: 100%;
  padding-bottom: 100%;
  position: relative;
}
.product-image img {
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: auto;
  display: block;
  opacity: 0;
  -webkit-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.product-image .mobile {
  display: none;
}
.product-image .loaded {
  opacity: 1;
}
.product-info {
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
}
.product-link:hover .product-info {
  transition: background 0.4s ease-out;
  background-color: rgba(255, 255, 255, 0.8);
}
.product-info .middle {
  display: none;
  flex: 0 0 100%;
  text-align: center;
  font-size: 13px;
  line-height: 13px;
  color: #000;
}
.product-link:hover .middle {
  display: block;
}
.product-title {
  display: block;
  margin: 0 15px;
  line-height: 1.2em;
  word-break: break-word;
}
.product-price {
  display: block;
  margin-top: 20px;
}
.product-price_old {
  display: block;
  margin-top: 20px;
  text-decoration: line-through;
}

@media (max-width: 767.98px) {
  .products {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  .product {
    margin-top: 15px;
    flex: 0 0 50%;
  }
  .product-link {
    text-decoration: none;
  }
  .product-info {
    position: static;
  }
  .product-info .middle {
    display: block;
    text-align: left;
  }
  .product-title {
    display: block;
    margin: 10px 0px 0px 0px;
    height: 30px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .product-info .price {
    margin-top: 10px;
  }
}
</style>
