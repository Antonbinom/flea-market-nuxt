<template>
  <header>
    <Container>
      <div class="wrapper">
        <NuxtLink to="/" class="logo" title="Flea-Market.ru">
          <img src="@/assets/logo2.png" alt="Flea-Market.ru" />
        </NuxtLink>
        <ul>
          <li>Винтаж</li>
          <li>Антиквариат</li>
          <li>Искусство</li>
          <li>Декор</li>
          <li>Подарки</li>
        </ul>

        <a href="tel:+79999999999" class="phone">+7 999 999 99 99</a>

        <NuxtLink to="/search" class="search" title="Поиск по сайту">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.5 17.5">
            <ellipse
              class="search-svg-style"
              cx="5.92"
              cy="8.01"
              rx="5.17"
              ry="5.13"
            ></ellipse>
            <line
              class="search-svg-style"
              x1="9.59"
              y1="11.64"
              x2="14.75"
              y2="16.75"
            ></line>
          </svg>
        </NuxtLink>
        <NuxtLink to="/basket" class="basket" title="Корзина">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.5 17.5">
            <path
              class="basket-svg-style basket-svg-edit-round"
              d="M14.14,6.17H2.36S.75,12,.75,13.58A3.19,3.19,0,0,0,4,16.75h8.57a3.19,3.19,0,0,0,3.21-3.17C15.75,12,14.14,6.17,14.14,6.17Z"
            ></path>
            <path
              class="basket-svg-style basket-svg-edit-limit"
              d="M4.5,5.64C4.5,3,5.59.75,8.25.75S12,3,12,5.64"
            ></path>
          </svg>
          <span></span>
        </NuxtLink>

        <span class="hamburger">
          <svg
            height="20px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 17.5"
          >
            <line class="hamburger-svg-style" y1="1" x2="18" y2="1"></line>
            <line class="hamburger-svg-style" y1="7" x2="18" y2="7"></line>
            <line class="hamburger-svg-style" y1="13" x2="18" y2="13"></line>
          </svg>
        </span>
      </div>
    </Container>
  </header>
</template>

<style scoped>
header {
  padding: 55px 0px;
  text-align: center;
}
header .wrapper {
  position: relative;
  /* margin: 0px auto;
  max-width: 87%; */
}
/*header .logo {
	display: inline-block;
	letter-spacing: 0.3em;
	font-size: 36px;
	text-decoration: none;
	color: #000;
	text-transform: uppercase;
	line-height: 1;
}*/
header .logo {
  display: inline-block;
  width: 400px;
  height: 150px;
}
header .logo img {
  width: 100%;
  display: block;
}
header ul {
  list-style: none;
  margin: 20px 0px 0px 0px;
  padding: 0px;
}
header ul li {
  display: inline-block;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
}
header ul li:after {
  content: "•";
  margin: 0px 10px;
}
header ul li:last-child:after {
  display: none;
}
header .search {
  position: absolute;
  top: 3px;
  left: 18px;
  width: 14px;
  height: 16px;
  text-decoration: none;
}
header .basket {
  position: absolute;
  top: 3px;
  right: 22px;
  text-decoration: none;
}
header .basket svg {
  width: 15px;
  height: 16px;
}
header .basket span {
  font-family: Arial;
  font-size: 14px;
  color: rgba(117, 117, 117, 1);
}
header .hamburger,
header .contacts {
  display: none;
}
header .phone {
  color: #000;
  position: absolute;
  top: 3px;
  right: 75px;
  height: 16px;
  line-height: 16px;
  text-decoration: none;
  letter-spacing: 0.1em;
}

.search-svg-style {
  stroke: rgba(117, 117, 117, 1);
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 1.5px;
}
.basket-svg-style {
  stroke: rgba(117, 117, 117, 1);
  fill: none;
  stroke-width: 1.5px;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.basket-svg-edit-limit {
  stroke-miterlimit: 10;
}

header .search:hover .search-svg-style,
header .basket:hover .basket-svg-style {
  stroke: rgba(0, 0, 0, 1);
}

@media (max-width: 767.98px) {
  header {
    padding: 40px 0px 25px 0px;
    border-bottom: 1px solid #000;
    position: relative;
  }
  header .wrapper {
    display: flex;
    align-items: center;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -moz-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  /*header .logo {
		font-size: 24px;
		text-align: left;
		line-height: 24px;
		letter-spacing: 0em;
		padding-right: 12px;
		flex-grow: 2;
	}*/
  header .logo {
    width: auto;
    height: auto;
    flex-grow: 2;
    margin-top: -20px;
  }
  header ul {
    display: none;
  }
  header .search,
  header .basket {
    position: static;
    height: 23px;
    display: flex;
    padding: 0px 12px;
  }
  header .hamburger {
    display: flex;
    padding: 0px 0px 0px 12px;
    color: #626262;
    width: 35px;
  }
  header .hamburger svg {
    height: 23px;
    width: 23px;
  }
  header .search {
    display: flex;
    width: 45px;
  }
  header .basket {
    display: flex;
    width: 55px;
  }
  header .basket svg {
    width: auto;
    height: 23px;
  }
  header .search svg {
    width: auto;
    height: 23px;
  }
  header .contacts {
    display: block;
    position: absolute;
    bottom: 0px;
    right: 15px;
  }
  header .contacts img {
    width: 30px;
    height: 30px;
  }

  header .phone {
    top: -10px;
    right: 15px;
  }
}
.hamburger-svg-style {
  stroke: rgba(117, 117, 117, 1);
  stroke-width: 1.5;
  fill: none;
  will-change: transform;
}
</style>
