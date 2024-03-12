<template>
  <div>
    <Transition name="fade">
      <MobileMenu v-if="isOpen" />
    </Transition>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const isOpen = useOpenMenu();
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
</style>
