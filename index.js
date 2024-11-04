const navbarEl = document.querySelector(".navbar");
const bottomContainerEl = document.querySelector(".bottom-container");

const container = document.querySelector(".top-container");
const word = ["Festivals of Nepal"];
let wordIdx = 0;
let characterIdx = 0;

function updateText() {
  container.innerHTML = `<h1>${word[wordIdx].slice(
    0,
    characterIdx
  )}</h1>`;

  characterIdx++;

  if (characterIdx > word[wordIdx].length) {
    wordIdx++;
    characterIdx = 0;

    if (wordIdx === word.length) {
      wordIdx = 0;
    }
  }

  setTimeout(updateText, 500);
}

updateText();

// scroll effect 

const contact = document.querySelector(".contact");

contact.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".footer").scrollIntoView({
    behavior: "smooth",
  });
});


const home = document.querySelector(".home");

home.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".top-container").scrollIntoView({
    behavior: "smooth",
  });
});

const festivalsLink = document.querySelector(".festivalsLink");

festivalsLink.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#festivals").scrollIntoView({
    behavior: "smooth",
  });
});


const dashain = document.querySelector("#dashain");

dashain.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#festivals").scrollIntoView({
    behavior: "smooth",
  });
});


const tihar = document.querySelector("#tihar");

tihar.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#Tihar").scrollIntoView({
    behavior: "smooth",
  });
});


const indraJatra = document.querySelector("#indraJatra");

indraJatra.addEventListener("click", (event) => {
  console.log(document.querySelector("#IndraJatra"));
  
  event.preventDefault();
  document.querySelector("#IndraJatra").scrollIntoView({
    behavior: "smooth",
  });
});


const sonamLhosar = document.querySelector("#sonamLhosar");

sonamLhosar.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#SonamLhosar").scrollIntoView({
    behavior: "smooth",
  });
});


const holi = document.querySelector("#holi");

holi.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#Holi").scrollIntoView({
    behavior: "smooth",
  });
});


const chhath = document.querySelector("#chhath");

chhath.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#Chhath").scrollIntoView({
    behavior: "smooth",
  });
});


