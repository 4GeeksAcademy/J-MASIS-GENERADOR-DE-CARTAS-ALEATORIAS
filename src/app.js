import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  console.log("Hello Rigo from the console!");

  let card = document.getElementById("card");
  let top = document.querySelector(".top");
  let bottom = document.querySelector(".bottom");
  let number = document.querySelector(".number");

  let palos = ["♦", "♥", "♠", "♣"];
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

  function createCard() {
    let azarPalo = Math.floor(Math.random() * palos.length);
    let azarNumber = Math.floor(Math.random() * numbers.length);

    top.innerHTML = palos[azarPalo];
    bottom.innerHTML = palos[azarPalo];
    number.innerHTML = numbers[azarNumber];

    if (palos[azarPalo] == "♦" || palos[azarPalo] == "♥") {
      card.style.color = "red";
    } else {
      card.style.color = "black";
    }
  }

  createCard();

  document.getElementById("btn-new").addEventListener("click", createCard);
};