<template>
  <pre>{{ categoryData }}</pre>
  <div class="category__input">
    <h5 class="category__input-title">Название</h5>
    <input
      placeholder="Введите название категории"
      type="text"
      v-model="categoryData.name"
    />
  </div>
  <div class="category__input">
    <h5 class="category__input-title">Заголовок категории</h5>
    <input
      placeholder="Введите заголовок категории"
      type="text"
      v-model="categoryData.title"
    />
  </div>
  <div class="subcategories">
    <h5>Подкатегории</h5>
    <div
      v-for="(subcategory, index) in categoryData.subcategories"
      :key="`${index}`"
      class="subcategory-item"
    >
      <div class="subcategory-inputs">
        <div class="subcategory-item__input">
          <label>Название</label>
          <input
            placeholder="Введите название подкатегории"
            v-model="categoryData.subcategories[index].name"
          />
        </div>
        <div class="subcategory-item__input">
          <label class="product-info__input-title">Заголовок</label>
          <input
            placeholder="Введите заголовок подкатегории"
            v-model="categoryData.subcategories[index].title"
          />
        </div>
        <button
          class="description-input__remove"
          @click="removeSubcategory(index)"
        >
          Удалить
        </button>
      </div>
      <div />
    </div>
    <button @click="addSubcategory">Добавить подкатегорию</button>
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
      @click="deleteCategory(category.id)"
    >
      Удалить
    </button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});

const route = useRoute();

const category = await useFetchCategoryByName(route.params.id);

const categoryData = ref(Object.assign({}, category.value));

// const selectedCategory = computed(() => {
//   return categories?.value?.find(
//     (category) => category.id === productData.value.categoryId
//   );
// });
const isDataWasChanged = computed(() => {
  return (
    JSON.parse(JSON.stringify(category.value)) !==
    JSON.parse(JSON.stringify(categoryData.value))
  );
});

const saveChanges = async () => {
  const validCategoryData = categoryData.value;
  delete validCategoryData.id;
  delete validCategoryData.path;

  await $fetch(`/api/category/${category.value.id}`, {
    method: "PUT",
    body: validCategoryData,
  });
};

// const deleteProduct = async (path) => {
//   await $fetch(`/api/product/${path}`, { method: "DELETE" });
//   router.push("/admin/products");
// };

const resetSubategory = () => {
  productData.value.subcategory = "";
};

const addDescriptionItem = () => {
  productData.value.description.push("");
};

const removeSubcategory = (index) => {
  categoryData.value.subcategories.splice(index, 1);
};
</script>
