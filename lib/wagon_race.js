const peachTrack = document.querySelectorAll("#player1-race td");
const yoshiTrack = document.querySelectorAll("#player2-race td");
const entireTrack = document.querySelector(".racer-table");
const container = document.querySelector(".container");
const dividers = document.querySelectorAll("hr");
const audio = new Audio("Audio/mario_music.m4a");
const trafficLight = new Audio("Audio/Traffic light.m4a");
const intro = document.querySelector("#intro");
const goldStar = document.querySelector("#gold-star");

function playAudio(url) {
  new Audio(url).play();
}

document.addEventListener("click", (event) => {
  intro.remove();
  trafficLight.play();
}, { once: true });

let peachPosition = 13;
let yoshiPosition = 13;

document.addEventListener("keyup", (event) => {
  if (event.key === "y" && yoshiPosition > 0) {
    yoshiTrack[yoshiPosition - 1].classList.add("active");
    yoshiTrack[yoshiPosition].classList.remove("active");
    yoshiPosition -= 1;
  } else if (event.key === "p" && peachPosition > 0) {
    peachTrack[peachPosition - 1].classList.add("active");
    peachTrack[peachPosition].classList.remove("active");
    peachPosition -= 1;
  } else if (peachPosition === 0) {
    entireTrack.remove();
    dividers.forEach(divider => divider.remove());
    container.insertAdjacentHTML("beforeend", "<br><br><img src='images/peachwin.png' id='peach'></img><h1>PEACH WINS!!!<br><br><img class='goldStar' style='width: 100px' src='images/goldstar.png'></img><br>REFRESH THE PAGE TO GO AGAIN</h1><br><br>");
    audio.play();
  } else if (yoshiPosition === 0) {
    entireTrack.remove();
    dividers.forEach(divider => divider.remove());
    container.insertAdjacentHTML("beforeend", "<br><br><img id='yoshi' src='images/yoshiwins.jpeg'></img><h1>YOSHI WINS!!!<br><br><img class='goldStar' style='width: 100px' src='images/goldstar.png'></img><br>REFRESH THE PAGE TO GO AGAIN</h1><br><br>");
    audio.play();
  }
});
