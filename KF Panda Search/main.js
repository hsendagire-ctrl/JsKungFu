// KF Panda Search

// HTML Variables
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");
var charImg = document.getElementById("char-img");
var changeTheme = document.getElementById("theme-btn");
var firstHeader = document.getElementById("topHeader");
var firstParagraph = document.getElementById("pTag");

document.getElementById("btn").addEventListener("click", btnClicked);
changeTheme.addEventListener("click", themeChange);

function btnClicked() {
  // Input
  let name = document.getElementById("char-in").value.toLowerCase();
  name = name.toLowerCase();

  // If Statement - Test the Input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior";
    charImg.src = "img/po.png";
  } else if (name === "tigress" || name === "master tigress") {
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "That was hardcore!";
    charImg.src = "img/tigress.png";
  } else if (name === "mantis") {
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML = "Fear the Bug!";
    charImg.src = "img/mantis.png";
  } else if (name === "monkey") {
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML = "We should hang out!";
    charImg.src = "img/monkey.png";
  } else if (name === "viper") {
    charNameEl.innerHTML = "Viper";
    charQuoteEl.innerHTML = "I can feel a kung fu chill riding up my spine.";
    charImg.src = "img/viper.png";
  } else if (name === "crane") {
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML = "Wings of Justice!";
    charImg.src = "img/crane.png";
  } else {
    charNameEl.innerHTML = "?????";
    charQuoteEl.innerHTML = "----------";
    charImg.src = "img/question-mark.png";
  }
}

function themeChange() {
  let themeVal = document.getElementById("theme-in").value;
  let randomVal1 = Math.floor(Math.random() * 255);
  let randomVal2 = Math.floor(Math.random() * 255);
  let randomVal3 = Math.floor(Math.random() * 255);
  let randomVal4 = Math.floor(Math.random() * 255);
  let randomVal5 = Math.floor(Math.random() * 255);
  let randomVal6 = Math.floor(Math.random() * 255);
  let randomVal7 = Math.floor(Math.random() * 255);
  let randomVal8 = Math.floor(Math.random() * 255);
  let randomVal9 = Math.floor(Math.random() * 255);
  let randomVal10 = Math.floor(Math.random() * 255);
  let randomVal11 = Math.floor(Math.random() * 255);
  let randomVal12 = Math.floor(Math.random() * 255);
  console.log(randomVal1);
  console.log(randomVal2);
  console.log(randomVal3);
  console.log(randomVal4);
  console.log(themeVal);
  if (themeVal === "dark" || themeVal === "black") {
    document.body.style.background = "rgba(0, 0, 0, 0.7)";
    charNameEl.style.color = "white";
    firstHeader.style.color = "white";
    firstParagraph.style.color = "white";
  } else if (themeVal === "light" || themeVal === "white") {
    document.body.style.background = "rgba(255,255,255, 0.7)";
    charNameEl.style.color = "black";
    firstHeader.style.color = "black";
    firstParagraph.style.color = "black";
  } else if (themeVal === "random" || themeVal === "any") {
    charNameEl.style.color = `rgba(${randomVal4}, ${randomVal5}, ${randomVal6})`;
    firstHeader.style.color = `rgba(${randomVal7}, ${randomVal8}, ${randomVal9})`;
    charQuoteEl.style.color = `rgba(${randomVal10}, ${randomVal11}, ${randomVal2})`;
    document.body.style.background = `rgba(${randomVal1}, ${randomVal2}, ${randomVal3})`;
  }
}
