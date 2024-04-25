<template>
  <AdminProducts :products="products" />
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
</style>
