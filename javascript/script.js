/*  */
/* Boxes */
/*  */

let boxArray = [
  {
    class: "box0 box",
    icon: "",
    title: "Kom hurtig i gang",
    link: "link.html",
    button: "Begynd at investere nu",
  },
  {
    class: "box1 box",
    icon: "fa-solid fa-wallet",
    title: "Din personlige portfolio",
    link: "link.html",
    button: "Din Wallet",
  },
  {
    class: "box2 box",
    icon: "fa-solid fa-euro-sign",
    title: "Følg forskellige valuta på markedet",
    link: "link.html",
    button: "Køb Valuta",
  },
  {
    class: "box3 box",
    icon: "fa-solid fa-bitcoin-sign",
    title: "Investér i dagens højeste kurs",
    link: "link.html",
    button: "Køb Crypto",
  },
  {
    class: "box4 box",
    icon: "fa-solid fa-stairs",
    title: "Følg kurserne på markedets coins",
    link: "link.html",
    button: "Se Kurser",
  },
];

let boxContainer = document.querySelector(".boxContainer");

boxArray.forEach((box) => {
  boxContainer.innerHTML += `
    <div class="${box.class}">
          <div class="content">
            <i class="${box.icon}"></i>
            <h1>${box.title}</h1>
            <a href="${box.link}">
              <button>${box.button}</button>
            </a>
          </div>
    </div>
    `;
});

/*  */
/* Slider */
/*  */

let sliderArray = [
  {
    src: "images/slider01.jpg",
    alt: "slider picture 1",
  },
  {
    src: "images/slider02.jpg",
    alt: "slider picture 2",
  },
  {
    src: "images/slider03.jpg",
    alt: "slider picture 3",
  },
];

let sliderContent = document.querySelector(".sliderContent");

sliderArray.forEach((slide) => {
  sliderContent.innerHTML += `
    <div class="single-slide">
        <img src="${slide.src}" class="slider-Slide" />
    </div> 
    `;
});

const slides = document.querySelectorAll(".single-slide");
/* const nextBtn = document.querySelector("[data-direction=next]");
const previousBtn = document.querySelector("[data-direction=previous]"); */

let slidesLength =
  slides.length - 1; /* Index'et på sidste billede i slideren */
let currentImageIndex = 0;

const setActiveSlide = (index) => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slides[index].classList.add("active");
};

setActiveSlide(currentImageIndex);

const next = () => {
  if (currentImageIndex >= slidesLength) {
    currentImageIndex = 0;
  } else {
    currentImageIndex += 1;
  }
  setActiveSlide(currentImageIndex); //Skal køres hver gang der trykkes på knapperne, for at registrere at currentImageIndex nu er noget andet, og at slideren skal skifte op eller ned
};

function setAutoSlide() {
  function updateCounter() {
    next();
    autoSlideTimeout = setTimeout(updateCounter, 5000);
  }
  updateCounter();
}
setAutoSlide();

/* const previous = () => {
  if (currentImageIndex === 0) {
    currentImageIndex = slidesLength;
  } else {
    currentImageIndex -= 1;
  }
  setActiveSlide(currentImageIndex);
};

if (nextBtn && previousBtn) {
  nextBtn.addEventListener("click", next);
  previousBtn.addEventListener("click", previous);
} */

/* Skriv denne lige efter setActiveSlide funktionen er skrevet - så vises der et billede med det samme*/
