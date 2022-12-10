// TODO: write your code here
const peachTrack = document.querySelectorAll("#player1-race td");
const yoshiTrack = document.querySelectorAll("#player2-race td");
const entireTrack = document.querySelector(".racer-table");
const container = document.querySelector(".container");
const dividers = document.querySelectorAll("hr");
const audio = new Audio("../Audio/mario_music.m4a");
const intro = document.querySelector("#intro")

function playAudio(url) {
  new Audio(url).play();
}

let peachPosition = 13
let yoshiPosition = 13

const yoshiFinish = document.querySelector("#player1-race td")[1]
const peachFinish = document.querySelector("#player2-race td"[1])

document.addEventListener("click", event =>{
  intro.remove();
})

document.addEventListener("keyup", event => {
  if (event.key === "y" && yoshiPosition > 0) {
    yoshiTrack[yoshiPosition - 1].classList.add("active");
    yoshiTrack[yoshiPosition].classList.remove("active");
    yoshiPosition -= 1;
  }
  else if (event.key === "p" && peachPosition > 0) {
    peachTrack[peachPosition - 1].classList.add("active");
    peachTrack[peachPosition].classList.remove("active");
    peachPosition -= 1;
  }
  else if (peachPosition === 0) {
    entireTrack.remove();
    dividers.forEach(divider =>
      divider.remove()
    )
    container.insertAdjacentHTML("beforeend", "<br><br><img src='../images/peachwin.png' id='peach'></img><h1>Peach wins!!!</h1>");
    audio.play();
  }
  else if (yoshiPosition === 0) {
    entireTrack.remove();
    dividers.forEach(divider =>
        divider.remove()
    )
    container.insertAdjacentHTML("beforeend", "<br><br><img id='yoshi' src='../images/yoshiwins.jpeg'></img><h1>Yoshi wins!!!</h1>");
    audio.play();
  }
})

