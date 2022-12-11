const peachTrack = document.querySelectorAll("#player1-race td");
const yoshiTrack = document.querySelectorAll("#player2-race td");
const entireTrack = document.querySelector(".racer-table");
const container = document.querySelector(".container");
const dividers = document.querySelectorAll("hr");
const audio = new Audio("Audio/mario_music.m4a");
const trafficLight = new Audio("Audio/Traffic light.m4a");
const intro = document.querySelector("#intro");
const grassVerge = document.querySelector("#grass-verge");
const engines = new Audio("Audio/engines.m4a");
const idling = new Audio("Audio/Idling.m4a")

function playAudio(url) {
  new Audio(url).play();
}


const trackDisappear = (event) => {
  entireTrack.remove();
  grassVerge.remove();
  dividers.forEach(divider => divider.remove());
};

const victory = (event) => {
  engines.pause();
  audio.play();
  const goldStar = document.querySelector(".goldStar");
  setTimeout(() => {
    goldStar.addEventListener("click", thing => document.location.reload());
    goldStar.insertAdjacentHTML("afterend", "<h1>CLICK HERE ☝️ TO GO AGAIN!</h1><br><br>");
  }, 2000);
  goldStar.addEventListener("click", thing => document.location.reload());
};

const race = (stuff) => {
  engines.play();
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
      trackDisappear();
      container.insertAdjacentHTML("beforeend", "<br><br><img src='images/peachwin.png' id='peach'></img><h1>PEACH WINS!!!<br><br><img class='goldStar' style='width: 100px' src='images/goldstar.png'><br><br></img>");
      victory();
    } else if (yoshiPosition === 0) {
      trackDisappear();
      container.insertAdjacentHTML("beforeend", "<br><br><img id='yoshi' src='images/yoshiwins.jpeg'></img><h1>YOSHI WINS!!!<br><br><img class='goldStar' style='width: 100px' src='images/goldstar.png'><br><br></img>");
      victory();
    }
  });
};

document.addEventListener("click", (event) => {
  intro.remove();
  idling.play();
  idling.volume = 0.7;
  trafficLight.play();
  grassVerge.innerHTML = "<br><br><h1>GET READY!</h1>";
  setTimeout(() => {
    grassVerge.innerHTML = "<br><br><br><br><h1>SET...</h1>";
  }, 2000);
  setTimeout(() => {
    grassVerge.innerHTML = "<br><br><br><br><br><br><h1 style='color: white'>GO!!!</h1>";
    race();
  }, 4000);
}, { once: true });
