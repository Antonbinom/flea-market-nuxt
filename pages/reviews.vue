<template>
  <p>&nbsp;</p>
  <p>
    Мы можем рассказать о себе много хорошего, но лучше, если это сделают наши
    покупатели <span style="font-size: large">☺︎</span>
  </p>
  <p>
    Ниже размещены отзывы из переписки в
    <span style="text-decoration: underline"
      ><span style="color: #050505; background-color: #ffffff"
        ><a href="https://www.facebook.com/NaBloshinomRynke/"
          ><span
            style="
              color: #050505;
              background-color: #ffffff;
              text-decoration: underline;
            "
            >Facebook</span
          ></a
        ></span
      ></span
    >,
    <span style="text-decoration: underline"
      ><span style="color: #000000"
        ><a href="https://www.instagram.com/nabloshinomrynke/"
          ><span style="color: #000000; text-decoration: underline"
            >Instagram</span
          ></a
        ></span
      ></span
    >,
    <span style="text-decoration: underline"
      ><span style="color: #000000"
        ><a href="https://wa.me/79851306152"
          ><span style="color: #000000; text-decoration: underline"
            >WhatsApp</span
          ></a
        ></span
      ></span
    >,
    <span style="text-decoration: underline"
      ><span style="color: #000000"
        ><a href="https://t.me/nabloshinomrynke"
          ><span style="color: #000000; text-decoration: underline"
            >Telegram</span
          ></a
        ></span
      ></span
    >
    и
    <span style="text-decoration: underline"
      ><span style="color: #000000"
        ><a href="mailto:vintage-market@mail.ru"
          ><span style="color: #000000; text-decoration: underline"
            >эл/почты</span
          ></a
        ></span
      ></span
    >. <br />
    Пользуясь случаем, благодарим всех, кто дарит нам тёплые слова и
    комплименты!
  </p>
  <div class="reviews">
    <img src="@/assets/review1.jpg" alt="" class="loaded" />
    <img src="@/assets/review2.jpg" alt="" class="loaded" />
    <img src="@/assets/review3.jpg" alt="" class="loaded" />
    <img src="@/assets/review4.jpg" alt="" class="loaded" />
    <img src="@/assets/review1.jpg" alt="" class="loaded" />
    <img src="@/assets/review2.jpg" alt="" class="loaded" />
    <img src="@/assets/review3.jpg" alt="" class="loaded" />
    <img src="@/assets/review4.jpg" alt="" class="loaded" />
    <img src="@/assets/review1.jpg" alt="" class="loaded" />
    <img src="@/assets/review2.jpg" alt="" class="loaded" />
    <img src="@/assets/review3.jpg" alt="" class="loaded" />
    <img src="@/assets/review4.jpg" alt="" class="loaded" />
  </div>
</template>

<script setup>
useHead({
  title: "Отзывы",
});
</script>

<style>
.reviews {
  padding-top: 50px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
.reviews img {
  width: 100%;
  /* opacity: 0;
  -webkit-transition: opacity 0.3s;
  -o-transition: opacity 0.3s;
  -moz-transition: opacity 0.3s;
  transition: opacity 0.3s; */
}
/* .reviews img.loaded {
  opacity: 1;
} */
</style>
