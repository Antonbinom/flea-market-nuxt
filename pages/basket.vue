<template>
  <div class="basket">
    <div class="basket-wrapper">
      <h1 class="basket-title">Корзина</h1>
      <div class="basket-head">
        <div class="basket-th name">Продукт</div>
        <div class="basket-th price">Цена</div>
        <div class="basket-th count">Количество</div>
        <div class="basket-th summ">Сумма</div>
      </div>

      <div class="basket-row">
        <div class="img">
          <a
            href="https://flea-market.ru/product/lot-2703-kremanka-serediny-20-veka-3937/"
          >
            <img src="@/assets/product.jpg" alt="" />
          </a>
        </div>
        <div class="name">
          <a
            href="https://flea-market.ru/product/lot-2703-kremanka-serediny-20-veka-3937/"
            >Лот 2703. Антикварная серебряная креманка сахарница Conquistador</a
          >
        </div>
        <div class="price">35 000 руб.</div>
        <div class="count">
          <div class="spinner">
            <a
              href="https://flea-market.ru/basket/#"
              class="minus"
              disabled="disabled"
            >
              <svg width="7" height="4" class="form__field_c">
                <rect width="7" height="1" rx="0.5" ry="0.5"></rect>
              </svg>
            </a>
            <input
              name="394868456436dbe743e4380554c0493a"
              value="1"
              id="count-394868456436dbe743e4380554c0493a"
            />
            <a href="https://flea-market.ru/basket/#" class="plus">
              <svg width="7" height="7" class="form__field_c">
                <path
                  d="M6.5 4H4v2.5a.5.5 0 01-1 0V4H.5a.5.5 0 010-1H3V.5a.5.5 0 011 0V3h2.5a.5.5 0 010 1z"
                ></path>
              </svg>
            </a>
            <span
              class="available"
              id="available-394868456436dbe743e4380554c0493a"
            ></span>
          </div>
        </div>
        <div class="summ">
          <div id="summ-394868456436dbe743e4380554c0493a">
            <span>35 000</span> руб.
          </div>
        </div>

        <div class="delete">
          <a
            href="https://flea-market.ru/basket/?act=del&amp;id=394868456436dbe743e4380554c0493a"
          >
            <svg width="13" height="13">
              <path
                d="M4 1h5M1 4h11M2 4l1 8h7l1-8"
                fill="none"
                fill-rule="evenodd"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="itogo">Итого: <span>35 000 руб.</span></div>

    <div class="checkout">
      <div class="checkout-info">
        <h2>Важная информация</h2>
        <p>Пожалуйста, проверьте свои контактные данные.</p>
        <p>Стоимость доставки рассчитывается отдельно.</p>
        <p>Сейчас вы ни за что не платите.</p>
        <p>
          После нажатия кнопки «ОФОРМИТЬ ПОКУПКУ», мы свяжемся в самое ближайшее
          время и вместе подберём удобный вам способ оплаты и доставки.
        </p>
      </div>

      <div class="checkout-form">
        <h2>Как можно с вами связаться?</h2>
        <form action="https://flea-market.ru/sendorder/" method="post">
          <div class="form-group">
            <input
              type="text"
              class="form-control input-lg"
              name="name"
              placeholder="Имя*"
              required=""
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control input-lg"
              name="email"
              placeholder="Email*"
              required=""
            />
          </div>
          <div class="form-group">
            <input
              type="text"
              class="form-control input-lg"
              name="phone"
              placeholder="Телефон*"
              required=""
            />
          </div>

          <button type="submit" class="order">Оформить покупку</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.basket-wrapper {
  font-size: 13px;
  font-family: Arial;
}
.basket-title {
  font-size: 24px;
  font-family: Arial;
  font-weight: normal;
  margin-bottom: 25px;
}
.basket-head {
  display: flex;
  color: rgb(204, 204, 204);
  border-bottom: 1px solid rgb(204, 204, 204);
}
.basket-head .basket-th {
  padding-bottom: 5px;
}
.basket-head .name {
  flex: 0 0 50%;
}
.basket-head .price {
  flex: 0 0 18%;
  text-align: center;
}
.basket-head .count {
  flex: 0 0 18%;
  text-align: center;
}
.basket-head .summ {
  flex: 0 0 10%;
  text-align: right;
}
.basket-row {
  display: flex;
  padding: 20px 0px 25px 0px;
  border-bottom: 1px solid rgb(204, 204, 204);
  color: #000;
  align-items: center;
}
.basket-row .img {
  width: 72px;
  margin-right: 25px;
  align-items: center;
}
.basket-row .img img {
  width: 100%;
}
.basket-row .name {
  width: -webkit-calc(50% - 97px);
  width: -moz-calc(50% - 97px);
  width: calc(50% - 97px);
  justify-content: center;
}
.basket-row .name a {
  color: #000;
  text-decoration: none;
}
.basket-row .price {
  width: 18%;
  text-align: center;
  justify-content: center;
}
.basket-row .count {
  width: 18%;
  text-align: center;
  justify-content: center;
}
.basket-row .summ {
  width: 10%;
  text-align: right;
  justify-content: center;
}
.basket-row .delete {
  text-align: right;
  width: 4%;
}
.basket-row .delete a {
  color: #000;
}
.basket-row .spinner {
  display: block;
  width: 80px;
  height: 55px;
  border: 1px solid rgb(204, 204, 204);
  margin: 0px auto;
  position: relative;
  padding: 0px 25px;
}
.basket-row .spinner .minus,
.basket-row .spinner .plus {
  position: absolute;
  top: 0px;
  bottom: 0px;
  line-height: 55px;
  color: #000;
  text-align: center;
  cursor: pointer;
  width: 25px;
  text-decoration: none;
}
.basket-row .spinner .minus {
  left: 0px;
}
.basket-row .spinner .plus {
  right: 0px;
}
.basket-row .spinner input {
  border: none;
  height: 53px;
  width: 100%;
  text-align: center;
}
.basket-row .spinner .available {
  position: absolute;
  top: 63px;
  left: -10px;
  font-size: 13px;
  color: #c91f20;
  width: 100px;
}

.itogo {
  border-bottom: 1px solid #ccc;
  padding: 15px 0px;
  text-align: right;
  font-size: 16px;
  font-family: Arial;
  padding-right: 4%;
  margin-bottom: 50px;
}
.itogo span {
  margin-left: 5px;
}

.checkout {
  display: flex;
  flex-wrap: wrap;
}

.checkout h2 {
  font-size: 24px;
  font-weight: normal;
  font-family: Arial;
}
.checkout-info {
  width: 49%;
  margin-right: 15%;
}
.checkout-info p {
  font-size: 12px;
  letter-spacing: 0px;
  font-weight: 400;
  line-height: 1.8;
}
.checkout-form {
  float: left;
  width: 36%;
}
.checkout-form input {
  width: 100%;
  border: 1px solid #ccc;
  padding: 0px 20px;
  font-size: 12px;
  font-family: Arial;
  margin-bottom: 10px;
  height: 53px;
}

.checkout-form .order {
  margin-top: 30px;
  display: inline-block;
  height: 55px;
  line-height: 55px;
  font-size: 12px;
  border-radius: 10px;
  padding: 0px 20px;
  width: 175px;
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
.checkout-form .order:hover {
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  color: #fff;
}

@media (max-width: 767.98px) {
  .basket-head {
    display: none;
  }
  .basket-row {
    flex-wrap: wrap;
    position: relative;
    padding: 0px 0px 25px 85px;
    margin-top: 15px;
  }
  .basket-row .img {
    order: 1;
    position: absolute;
    left: 0px;
    top: 0px;
  }
  .basket-row .price {
    display: none;
  }
  .basket-row .name {
    order: 2;
    width: 96%;
    justify-content: center;
    padding-right: 15px;
    margin-bottom: 15px;
  }
  .basket-row .delete {
    order: 3;
    position: absolute;
    top: 0px;
    right: 0px;
  }
  .basket-row .count {
    order: 4;
    width: 50%;
    text-align: left;
  }
  .basket-row .spinner {
    margin: 0px;
    height: 40px;
  }
  .basket-row .spinner .minus,
  .basket-row .spinner .plus {
    line-height: 40px;
  }
  .basket-row .spinner input {
    height: 38px;
  }
  .basket-row .spinner .available {
    top: 43px;
    left: 0px;
    font-size: 12px;
  }
  .basket-row .summ {
    order: 5;
    width: 50%;
  }
  .itogo {
    padding-right: 0px;
  }
  .checkout {
    flex-direction: column;
  }
  .checkout-form,
  .checkout-info {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .checkout-form .order {
    width: 100%;
  }
}
</style>
