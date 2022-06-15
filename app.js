let newsearch = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  newsearch.classList.toggle("active");
  newmenu.classList.remove("active");
  newcart.classList.remove("active");
  login.classList.remove("active");
};

let newcart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  newcart.classList.toggle("active");
  newmenu.classList.remove("active");
  newsearch.classList.remove("active");
  login.classList.remove("active");
};

let login = document.querySelector(".login-form");

document.getElementById("login-btn").onclick = () => {
  login.classList.toggle("active");
  newmenu.classList.remove("active");
  newsearch.classList.remove("active");
  newcart.classList.remove("active");
};

let newmenu = document.querySelector(".navbar");

document.getElementById("menu-btn").onclick = () => {
  newmenu.classList.toggle("active");
  newsearch.classList.remove("active");
  newcart.classList.remove("active");
  login.classList.remove("active");
};

window.onscroll = () => {
  newmenu.classList.remove("active");
  newsearch.classList.remove("active");
  newcart.classList.remove("active");
  login.classList.remove("active");
};

var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".review-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  centeredSlides: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
});
