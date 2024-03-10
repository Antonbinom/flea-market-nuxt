<template>
  <div class="form">
    <Container>
      <div class="form-wrapper">
        <div class="form-info">
          <div class="form-title">Напишите нам</div>
          <div class="form-subtitle">
            Остались вопросы?<br />Мы рады помочь!
          </div>
        </div>
        <div class="form-fields">
          <input type="text" class="form-name" placeholder="Имя" />
          <input
            type="text"
            class="form-contacts"
            placeholder="E-mail или телефон *"
          />
          <textarea placeholder="Вопрос *" class="form-text"></textarea>
          <div class="form-result"></div>
          <button class="form-submit">Отправить</button>
        </div>
      </div>
    </Container>
  </div>
</template>

<script setup></script>

<style scoped>
.form {
  background: #f7f7f7;
  padding: 90px 0px;
  margin-bottom: 100px;
}
.form-wrapper {
  display: flex;
  justify-content: space-between;
}
.form-fields {
  width: 50%;
  padding: 10px;
}
.form-info {
  position: relative;
  margin-top: 100px;
  width: 33.333%;
  height: fit-content;
  border-right: 0.5px solid #000;
  padding: 30px 0px;
}

.form-title {
  text-transform: uppercase;
  font-size: 11px;
  letter-spacing: 0.3em;
  line-height: 1.8;
  margin-bottom: 20px;
}
.form-subtitle {
  letter-spacing: 0.05em;
  line-height: 1.6;
  font-family: "Georgia";
  font-size: 24px !important;
  margin: 0 auto;
}

.form-fields input {
  width: 100%;
  background: none;
  height: 53px;
  padding: 15px 20px 14px 0px;
  border: none;
  border-bottom: 1px solid #000;
  color: #000;
  margin-bottom: 10px;
  margin-top: 10px;
  font-family: "Anglecia Pro Display";
  font-size: 14px;
  outline: none;
}
.form-text {
  width: 100%;
  background: none;
  height: 150px;
  padding: 15px 20px 14px 0px;
  border: none;
  border-bottom: 1px solid #000;
  color: #000;
  margin-bottom: 10px;
  margin-top: 10px;
  font-family: "Anglecia Pro Display";
  font-size: 14px;
  overflow-wrap: break-word;
  resize: none !important;
  outline: none;
}

.form-submit {
  width: 100%;
  height: 42px;
  text-align: center;
  border: 1px solid #000;
  background: none;
  margin-top: 35px;
  font-family: Arial;
  font-weight: normal;
  letter-spacing: 3px;
  font-size: 10px;
  text-transform: uppercase;
  cursor: pointer;
  -webkit-transition: color 0.3s;
  -o-transition: color 0.3s;
  -moz-transition: color 0.3s;
  transition: color 0.3s;
}
.form-submit:hover {
  background: #000;
  color: #fff;
}

.form-fields ::-moz-placeholder {
  color: #000;
}
.form-fields ::-webkit-input-placeholder {
  color: #000;
}
.form-fields :-ms-input-placeholder {
  color: #000;
}
.form-fields ::-ms-input-placeholder {
  color: #000;
}
.form-fields ::placeholder {
  color: #000;
}
.form-result {
  text-align: center;
}

@media (max-width: 767.98px) {
  .form {
    padding: 0px 0px 50px 0px;
  }
  .form-wrapper {
    flex-direction: column;
  }
  .form-fields {
    float: none;
    width: 100%;
    padding: 0px;
  }

  .form-info {
    width: 100%;
    border-right: none;
    margin-top: 0;
    padding-bottom: 0;
  }

  .form-text {
    float: none;
    margin-top: 30px;
    width: 100%;
    border-right: none;
    padding: 0px;
  }
}
</style>
