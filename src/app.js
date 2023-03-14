/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

  let excuse = `${fraseRandom(who)} ${fraseRandom(action)} ${fraseRandom(
    what
  )} ${fraseRandom(when)}`;
  let element = document.getElementById("excuse");
  element.innerHTML = excuse;
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function fraseRandom(array) {
  let pick = array[Math.floor(Math.random() * array.length)];
  return pick;
}
