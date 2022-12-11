/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/wagon_race.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/wagon_race.js":
/*!***************************!*\
  !*** ./lib/wagon_race.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

const peachTrack = document.querySelectorAll("#player1-race td");
const yoshiTrack = document.querySelectorAll("#player2-race td");
const entireTrack = document.querySelector(".racer-table");
const container = document.querySelector(".container");
const dividers = document.querySelectorAll("hr");
const audio = new Audio("Audio/mario_music.m4a");
const trafficLight = new Audio("Audio/Traffic light.m4a");
const intro = document.querySelector("#intro");
const grassVerge = document.querySelector("#grass-verge");

function playAudio(url) {
  new Audio(url).play();
}

const victory = (event) => {
  audio.play();
  const goldStar = document.querySelector(".goldStar");
  setTimeout(() => {
    goldStar.addEventListener("click", thing => document.location.reload());
    goldStar.insertAdjacentHTML("afterend", "<h1>CLICK HERE ☝️ TO GO AGAIN!</h1><br><br>");
  }, 2000);
  goldStar.addEventListener("click", thing => document.location.reload());
};

const trackDisappear = (event) => {
  entireTrack.remove();
  grassVerge.remove();
  dividers.forEach(divider => divider.remove());
};

const race = (stuff) => {
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
  trafficLight.play();
  grassVerge.innerHTML = "<br><br><h1>GET READY!</h1>";
  setTimeout(() => {
    grassVerge.innerHTML = "<br><br><h1>SET</h1>";
  }, 2000);
  setTimeout(() => {
    grassVerge.innerHTML = "<br><br><h1>GO!!!</h1>";
    race();
  }, 4000);
}, { once: true });


/***/ })

/******/ });
//# sourceMappingURL=main.js.map