import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  document.querySelector("#miBoton").addEventListener("click", generateRandomCard)

};


const generateRandomCard = () => {
const colorChange = document.querySelector(".top")
const colorChange2 = document.querySelector(".bottom")
let icon = ["♦", "♥", "♠", "♣"];
let number = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

let iconIndex = Math.floor(Math.random() * icon.length)
let numberIndex = Math.floor(Math.random() * number.length)

let randomIcon = icon[iconIndex]
let randomNumber = number[numberIndex]

if (randomIcon == "♥" || randomIcon == "♦") {
colorChange.style.color = "red"
colorChange2.style.color = "red"
}
else {
colorChange.style.color = "black"
colorChange2.style.color = "black"
}

colorChange.innerHTML = randomIcon
document.querySelector(".number").innerHTML = randomNumber
colorChange2.innerHTML = randomIcon

}