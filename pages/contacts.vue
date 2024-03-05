<template>
  <div class="bg-contacts">
    <div class="contacts-wrapper">
      <div class="line1">Контакты</div>
      <div class="line2">Всегда на связи<br />с вами</div>
      <p>
        <a href="https://wa.me/79851306152">WhatsApp</a>,
        <a href="https://t.me/flea_market_ru">Telegram</a>,
        <a href="tel:+79858864155">+79858864155</a><br />

        Email:
        <a href="mailto:vintage-market@mail.ru">vintage-market@mail.ru</a><br />
      </p>
      <div class="contact-form">
        <input
          type="text"
          class="contact-form__field form-name"
          placeholder="Имя"
        />
        <input
          type="text"
          class="contact-form__field form-email"
          placeholder="E-mail*"
        />
        <textarea
          class="contact-form__field"
          placeholder="Сообщение"
        ></textarea>
        <button>Отправить</button>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "contacts",
});
useHead({
  title: "Контакты",
});
</script>

<style scoped>
.bg-contacts {
  min-height: 100vh;
  background: url(../assets/bg-contacts.jpg) center center no-repeat;
  background-size: cover;
  margin-top: 40px;
  /* margin-bottom: -1px; */
  position: relative;
}
.bg-contacts:before {
  content: "";
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: 1;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
.contacts-wrapper {
  max-width: 400px;
  margin: 0px auto;
  text-align: center;
  padding: 100px 0px;
  position: relative;
  z-index: 2;
}
.contacts-wrapper .line1 {
  letter-spacing: 0.3em;
  font-size: 11px;
  line-height: 180%;
  color: #fff;
  text-transform: uppercase;
}
.contacts-wrapper .line2 {
  letter-spacing: 1.8px;
  font-size: 36px;
  line-height: 125%;
  color: #fff;
  margin: 20px 0px;
}
.contacts-wrapper p {
  color: #fff;
  font-family: Arial;
}
.contacts-wrapper p a {
  color: #fff;
  text-decoration: underline;
}
.contacts-wrapper input {
  height: 53px;
  width: 100%;
  display: block;
  background: none;
  border: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  margin-bottom: 20px;
  font-family: "Georgia";
  font-size: 12px;
  font-weight: normal;
  letter-spacing: 0.05em;
}
.contacts-wrapper textarea {
  height: 100px;
  width: 100%;
  display: block;
  background: none;
  border: none;
  border-bottom: 1px solid #fff;
  color: #fff;
  margin-bottom: 60px;
  font-family: "Georgia";
  font-size: 12px;
  font-weight: normal;
  letter-spacing: 0.05em;
}
.contacts-wrapper ::placeholder {
  color: #fff;
}
.contacts-wrapper button {
  height: 48px;
  display: block;
  width: 100%;
  border: 1px solid #fff;
  color: #fff;
  background: none;
  font-family: Arial;
  font-weight: normal;
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.result {
  padding: 100px 0px;
  text-align: center;
  color: #fff;
  line-height: 200%;
}

.contact-form__field {
  outline: none;
}

@media (max-width: 767.98px) {
  .contacts-wrapper {
    padding: 30px 10px;
  }
}
</style>
