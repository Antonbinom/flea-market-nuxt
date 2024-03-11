<template>
  <div class="product">
    <div class="product-photos">
      <div class="product-photos__main">
        <img src="@/assets/product.jpg" :alt="product.name" />
      </div>
      <div class="product-photos__other">
        <img
          src="@/assets/product.jpg"
          alt="Винтажная фарфоровая статуэтка Англия Royal Doulton 4720 Spring Весна"
        />
        <img
          src="@/assets/product.jpg"
          alt="Винтажная фарфоровая статуэтка Англия Royal Doulton 4720 Spring Весна"
        />
        <img
          src="@/assets/product.jpg"
          alt="Винтажная фарфоровая статуэтка Англия Royal Doulton 4720 Spring Весна"
        />
        <img
          src="@/assets/product.jpg"
          alt="Винтажная фарфоровая статуэтка Англия Royal Doulton 4720 Spring Весна"
        />
        <img
          src="@/assets/product.jpg"
          alt="Винтажная фарфоровая статуэтка Англия Royal Doulton 4720 Spring Весна"
        />
      </div>
    </div>
    <div class="product-info">
      <h1>{{ product.title }}</h1>
      <div class="product-info__top">
        <span class="product-price">{{ product.price }} руб.</span>
        <span class="product-lot">Лот №{{ product.lot }}</span>
      </div>
      <button class="in_basket" @click="addToBasket">Добавить в корзину</button>
      <div class="product-info__text">
        <p v-for="item in product.description" :key="item">{{ item }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getData, setData } from "nuxt-storage/local-storage";
import { products } from "@/data/products";
import { useRoute } from "vue-router";
const goodsInBasket = useGoodsInBasket();

const route = useRoute();
const product = computed(() => {
  return products.find((product) => product.path.includes(route.params.name));
});

const addToBasket = () => {
  if (!product.value) return;
  const good = {
    price: product.value.price,
    lot: product.value.lot,
    title: product.value.title,
    image: "product.jpg",
    count: 1,
    path: product.value.path,
  };

  let goods = getData("products") || [];

  const existingGoodIndex = goods.findIndex((item) => item.lot === good.lot);
  if (existingGoodIndex !== -1) {
    goods[existingGoodIndex].count++;
  } else {
    goods.push(good);
    goodsInBasket.value++;
  }

  setData("products", goods);
};
</script>

<style scoped>
.product {
  display: flex;
}
.product-photos {
  display: flex;
  flex-direction: column;
  width: 56%;
  padding-right: 40px;
}
.product-photos img {
  width: 100%;
  cursor: pointer;
}

.product-photos__other {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  padding-top: 10px;
}
.product-photos__other img {
  width: 12.5%;
}
.product-info {
  width: 44%;
}
.product-info h1 {
  margin: 0 0 21px;
  font-size: 20px;
  line-height: 1.3;
  font-weight: 400;
}
.product-info__top {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.product-price {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 30px;
}
.product-price_old {
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 30px;
}
.product-price_old span {
  display: block;
  text-decoration: line-through;
  margin-bottom: 10px;
}
.in_basket {
  display: inline-block;
  height: 55px;
  text-transform: uppercase;
  line-height: 55px;
  font-size: 12px;
  border-radius: 10px;
  padding: 0px 20px;
  width: 360px;
  border: 1px solid #000;
  text-align: center;
  font-family: Arial;
  text-decoration: none;
  color: #000;
  letter-spacing: 0.6px;
  -webkit-transition: color 0.3s;
  -o-transition: color 0.3s;
  -moz-transition: color 0.3s;
  transition: color 0.3s;
  background: #fff;
  cursor: pointer;
}
.in_basket:hover {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: rgba(0, 0, 0, 0.7);
  color: #fff;
}
.in_basket:disabled {
  background: #999;
}

.product-info__text,
.product-info__text p {
  font-size: 14px;
  line-height: 1.22;
}

@media (max-width: 767.98px) {
  .product {
    flex-direction: column;
  }
  .product-photos {
    float: none;
    width: 100%;
    padding-right: 0px;
    overflow: hidden;
    margin-bottom: 25px;
  }
  .product-info {
    width: 100%;
  }
  .product-photos__other {
    gap: 2.6%;
  }
  .product-photos__other img {
    width: 23%;
    margin-bottom: 2.6%;
  }
  .in_basket {
    width: 100%;
  }
}
</style>
