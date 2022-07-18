const closeWelcome = function () {
  if (inputName.value !== "") {
    welcomeSection.classList.add("hide");
    loadingSection.classList.remove("hide");
    loadingRing.style.animationPlayState = "running";
    loadingText.style.animationPlayState = "running";
  } else if (inputName.value === "") {
    alertInputName.classList.remove("hide");
  }
};

const displayClock = function () {
  loadingSection.classList.add("hide");
  clockSection.classList.remove("hide");

  pageClock = true;
  let date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let sh = "AM";

  h = h < 10 ? (h = "0" + h) : h;
  m = m < 10 ? (m = "0" + m) : m;
  s = s < 10 ? (s = "0" + s) : s;

  if (h <= 12) {
    sh = "AM";
  } else {
    sh = "PM";
  }

  const time = `${h}:${m}<small>:${s}  ${sh}</small>`;
  document.querySelector(".clock").innerHTML = time;
  setTimeout(displayClock, 1000);

  if (h >= 06 && h < 17) {
    document.querySelector(
      ".message"
    ).innerHTML = `Buenos dias ${inputName.value}!`;
  } else if (h >= 17 && h < 20) {
    document.querySelector(
      ".message"
    ).innerHTML = `Buenas tardes ${inputName.value}!`;
  } else if (h >= 20 || h >= 00) {
    document.querySelector(
      ".message"
    ).innerHTML = `Buenas noches ${inputName.value}!`;
  }

  if (h >= 06 && h < 12) {
    document.body.style.backgroundImage = 'url("./morning.png")';
  } else if (h >= 12 && h < 17) {
    document.body.style.backgroundImage = 'url("./day.png")';
  } else if (h >= 17 && h < 20) {
    document.body.style.backgroundImage = 'url("./afternoon.png")';
  } else if (h >= 20 || h >= 00) {
    document.body.style.backgroundImage = 'url("./night.png")';
  }
};

const welcomeSection = document.querySelector(".section-welcome");
const goButton = document.querySelector(".go-button");
const inputName = document.querySelector(".user-name");
const alertInputName = document.querySelector(".alert-name");
const loadingSection = document.querySelector(".section-loading");
const loadingRing = document.querySelector(".ring");
const loadingText = document.querySelector(".loading");
const clockSection = document.querySelector(".section-clock");

let pageClock = false;

goButton.addEventListener("click", closeWelcome);

document.addEventListener("keydown", function (e) {
  let keyName = e.key;

  if (!pageClock) {
    if (keyName === "Enter") {
      if (inputName.value !== "") {
        welcomeSection.classList.add("hide");
        loadingSection.classList.remove("hide");
        loadingRing.style.animationPlayState = "running";
        loadingText.style.animationPlayState = "running";
      } else if (inputName.value === "") {
        alertInputName.classList.remove("hide");
      }
    } else {
      return;
    }
  }
});

loadingText.addEventListener("animationend", displayClock);
