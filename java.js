const asd = document.querySelector(".c");
const Btns = document.querySelectorAll(".x span");
const CardWidth = asd.querySelector(".v").offsetWidth;
const Childrens = [...asd.children];

let Dragging = false, startY, startScrollLeft;
let PerView = Math.round(asd.offsetWidth / CardWidth);

Childrens.slice(-PerView).reverse().forEach(cards => {
  asd.insertAdjacentHTML("afterbegin", cards.outerHTML);
});

Childrens.slice(0, PerView).reverse().forEach(cards => {
  asd.insertAdjacentHTML("beforeend", cards.outerHTML);
});

Btns.forEach(btns => {
  btns.addEventListener("click", () => {
    asd.scrollLeft += btns.id === "m" ? -CardWidth : CardWidth;
  });
});

const dragStart = (s) => {
  Dragging = true;
  asd.classList.add("dragging"); // Corrected typo from "clasdList" to "classList"
  startY = s.pageX;
  startScrollLeft = asd.scrollLeft;
};

const dragging = (s) => {
  if (!Dragging) return;
  asd.scrollLeft = startScrollLeft - (s.pageX - startY);
};

const dragStop = () => {
  Dragging = false;
  asd.classList.remove("dragging"); // Corrected typo from "clasdList" to "classList"
};

const infiniteScroll = () => {
  if (asd.scrollLeft === 0) {
    asd.scrollLeft = 3.5 * asd.offsetWidth;
  } else if (Math.ceil(asd.scrollLeft) === asd.scrollWidth - asd.offsetWidth) {
    asd.scrollLeft = 1;
  }
};

asd.addEventListener("mousedown", dragStart);
asd.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
asd.addEventListener("scroll", infiniteScroll);