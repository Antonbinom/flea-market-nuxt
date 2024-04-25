<template>
  <div>
    <Transition name="fade">
      <MobileMenu v-if="isOpen" />
    </Transition>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <div v-if="buttonName" @click="goToAdminPanel" class="to-admin__btn">
      {{ buttonName }}
    </div>
  </div>
</template>

<script setup>
const router = useRouter();
const route = useRoute();

const isOpen = useOpenMenu();

const buttonName = computed(() => {
  if (route.path.includes("/product/")) {
    return "Редактировать товар";
  } else if (route.path.includes("/admin/products/")) {
    return "Посмотреть в магазине";
  } else if (route.path.includes("/admin") && !route.params.name) {
    return "В магазин";
  } else return "Панель администратора";
});

const goToAdminPanel = () => {
  if (route.path.includes("/product/")) {
    router.push(`/admin/products/${route.params.name}`);
  } else if (route.path.includes("/admin/products/")) {
    router.push(`/product/${route.params.name}`);
  } else if (route.path.includes("/admin") && !route.params.name) {
    router.push("/");
  } else {
    router.push(`/admin/`);
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.to-admin__btn {
  position: fixed;
  right: 0;
  top: 0;

  padding: 10px;

  color: #000;
  background: #fff;
  border: 1px solid #000;
  border-right: none;
  border-radius: 5px 0 0 5px;
  cursor: pointer;
}
</style>
