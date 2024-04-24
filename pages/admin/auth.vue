<template>
  <div class="auth">
    <input
      v-for="input in inputs"
      v-model="input.value"
      class="auth-field"
      :placeholder="input.placeholder"
      :type="input.type"
    />
    <button @click="login" class="auth-submit">Submit</button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "",
});

const inputs = ref([
  {
    name: "login",
    value: "",
    placeholder: "login",
    type: "text",
  },
  {
    name: "password",
    value: "",
    placeholder: "password",
    type: "password",
  },
]);

const login = () => {
  if (inputs.value[0].value !== "admin" || inputs.value[1].value !== "admin") {
    return;
  }
  localStorage.setItem("admin", true);
  navigateTo("/admin");
};
</script>

<style scoped>
.auth {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  padding: 30px;

  font-size: 16px;
  font-weight: 500;

  transform: translate(-50%, -50%);
}
.auth-field {
  margin-bottom: 10px;
  padding: 8px;
  border-color: darkgray;
  border-radius: 5px;
}

.auth-submit {
  padding: 8px;

  color: azure;
  border: none;
  border-radius: 5px;
  background-color: #6700e5;

  cursor: pointer;
}
</style>
