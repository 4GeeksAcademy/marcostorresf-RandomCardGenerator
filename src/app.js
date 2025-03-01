import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateRandomCard()
};

const generateRandomCard = () => {

let icon = ["♦","♥","♠","♣"];
let number = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]

let iconIndex = Math.floor (Math.random() * icon.length)
let numberIndex = Math.floor(Math.random() * number.length)

let randomIcon = icon[iconIndex]
let randomNumber = number[numberIndex]

document.querySelector (".top").innerHTML = randomIcon
document.querySelector(".number").innerHTML = randomNumber
document.querySelector(".bottom") .innerHTML = randomIcon






// let suit = icon [Math. floor (Math.random() * icon.length)]; 

// if
// (suit == "♠" || suit == "♣") {
//  let suit = element.style.color = 'black';
// }

// else 
// (suit == "♥" || suit == "♦") {
//   let suit = element.style.color = 'red';

// }



// document.querySelector (".top").innerHTML = icon[Math.floor (Math.random() * icon.length)];
// document.querySelector (".number").innerHTML = number[Math.floor (Math.random() * number.length)];
// document.querySelector (".bottom").innerHTML = icon[Math.floor (Math.random() * icon.length)];


}
