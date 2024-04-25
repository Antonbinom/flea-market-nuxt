<template>
  <div class="product">
    <div class="product-photos">
      <div class="product-photos__main">
        <img src="@/assets/product.jpg" />
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
      <div class="product-info__input">
        <h5 class="product-info__input-title">Заголовок</h5>
        <input type="text" v-model="productData.title" />
      </div>
      <div class="product-info__input">
        <h5 class="product-info__input-title">Лот</h5>
        <input type="number" v-model="productData.lot" />
      </div>
      <div class="product-info__input">
        <h5 class="product-info__input-title">Цена</h5>
        <input type="number" v-model="productData.price" />
      </div>
      <div class="product-info__input">
        <h5 class="product-info__input-title">Категория</h5>
        <select v-model="productData.categoryId" @change="resetSubategory">
          <option v-for="category in categories" :value="category.id">
            {{ category.title }}
          </option>
        </select>
      </div>
      <div
        class="product-info__input"
        v-if="selectedCategory?.subcategories.length"
      >
        <h5 class="product-info__input-title">Подкатегория</h5>
        <select v-model="productData.subcategory">
          <option value=""></option>
          <option
            v-for="subcategory in selectedCategory.subcategories"
            :value="subcategory.name"
          >
            {{ subcategory.name }}
          </option>
        </select>
      </div>
      <div class="product-info__input">
        <h5 class="product-info__input-title">Краткое описание</h5>
        <input type="text" v-model="productData.previewDescription" />
      </div>
      <div class="product-info__description">
        <h5 class="product-info__input-title">Описание</h5>
        <div
          v-for="(item, index) in productData.description"
          :key="index"
          class="product-info__input description-input"
        >
          <input
            placeholder="Введите текст описания"
            v-model="productData.description[index]"
          />
          <button
            class="description-input__remove"
            @click="removeDescriptionItem(index)"
          >
            X
          </button>
          <div />
        </div>
        <button @click="addDescriptionItem">Добавить описание</button>
      </div>

      <div class="product-info__input">
        <h5 class="product-info__input-title">Количество</h5>
        <input type="number" v-model="productData.count" />
      </div>
    </div>
    <div class="product-buttons">
      <button
        :disabled="!isDataWasChanged"
        class="product-btn product-btn__change"
        @click="saveChanges"
      >
        Сохранить
      </button>
      <button
        class="product-btn product-btn__delete"
        @click="deleteProduct(product.path)"
      >
        Удалить
      </button>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const router = useRouter();
const route = useRoute();
const product = await useFetchProductByName(route.params.name);

const { data: categories } = await useFetchCategories();

const productData = ref(Object.assign({}, product.value));
const selectedCategory = computed(() => {
  return categories?.value?.find(
    (category) => category.id === productData.value.categoryId
  );
});
const isDataWasChanged = computed(() => {
  return JSON.stringify(product.value) !== JSON.stringify(productData.value);
});

const saveChanges = async () => {
  const validProdutData = productData.value;
  delete validProdutData.id;
  delete validProdutData.created_at;
  delete validProdutData.updated_at;
  await $fetch(`/api/product/${product.value.path}`, {
    method: "PUT",
    body: validProdutData,
  });
};

const deleteProduct = async (path) => {
  await $fetch(`/api/product/${path}`, { method: "DELETE" });
  router.push("/admin/products");
};

const resetSubategory = () => {
  productData.value.subcategory = "";
};

const addDescriptionItem = () => {
  productData.value.description.push("");
};

const removeDescriptionItem = (index) => {
  productData.value.description.splice(index, 1);
};
</script>

<style scoped>
.product {
  display: flex;
  flex-wrap: wrap;
  position: relative;
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

.product-info__description {
  margin-bottom: 10px;
}
.product-info__description .product-info__input {
  display: flex;
  margin-bottom: 5px;
}
.product-info__input input,
select {
  width: 100%;
}

.product-info__input .description-input {
  width: auto;
}

.description-input__remove {
  margin-left: 10px;
  background-color: rgb(237, 45, 45);
  color: #ffffff;
  border: none;
  border-radius: 5px;
}
.product-info__input-title {
  margin-bottom: 5px;
}
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
.product-btn__shop {
  background-color: rgb(0, 0, 0);
  color: #ffffff;
  border: none;
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
