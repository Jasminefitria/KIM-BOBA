//****--- navbar ---****//
const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

//* open menu  *//
openMenu.addEventListener("click", () => {
  menu.classList.add("open");
});

//* close menu  *//
closeMenu.addEventListener("click", () => {
  menu.classList.remove("open");
});

//* scroll sticky nav  *//
window.addEventListener('scroll', () => {
  let scrollY = window.scrollY;
  scrollY > 70 ? nav.classList.add("sticky") : nav.classList.remove("sticky");
})

//****--- prodouct card ---****//
const prodouctData = [
  {
    title: "Special",
    star: "4.8",
    price: "10-15k",
    img: "./images/Spesial.png",
  },
  {
    title: "Coffee Series",
    star: "4.5",
    price: "10-15k",
    img: "./images/Coffee.png",
  },
  {
    title: "Tea Series",
    star: "4.6",
    price: "10-15k",
    img: "./images/Tea.png",
  },
];

const containerCard = document.getElementById("cards-container");

prodouctData.map((item) => {
  const prodouctCard = `
  <div class="prodouct-card" data-aos="zoom-in">
            <div class="prodouct-img">
              <img src=${item.img} alt="">
            </div>
            <div class="prodouct-content">
              <h3>${item.title}</h3>
              <span>Rp${item.price}</span>
              <span class="card-star">${item.star} <i class='bx bxs-star'></i></span>
              <button class="contained-btn">
              More</i>
            </button>
            </div>
          </div>
  `;
  containerCard.innerHTML += prodouctCard
});
