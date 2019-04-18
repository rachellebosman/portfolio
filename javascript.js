//De eerste video 

var capVideo = document.getElementById("capVideo");
var playQueerBeer = document.getElementById("playCap");

function myFunction0() {
  if (capVideo.paused) {
    capVideo.play();
    playCap.innerHTML = "⏸ Stop animatie";
  } else {
    capVideo.pause();
    playCap.innerHTML = "▶️ Start animatie";
  }
}


var queerBeerVideo = document.getElementById("queerBeerVideo");
var playQueerBeer = document.getElementById("playQueerBeer");

function myFunction1() {
  if (queerBeerVideo.paused) {
    queerBeerVideo.play();
    playQueerBeer.innerHTML = "⏸ Stop animatie";
  } else {
    queerBeerVideo.pause();
    playQueerBeer.innerHTML = "▶️ Start animatie";
  }
}

var foundationVideo = document.getElementById("foundationVideo");
var playFoundation = document.getElementById("playFoundation");

function myFunction2() {
  if (foundationVideo.paused) {
    foundationVideo.play();
    playFoundation.innerHTML = "⏸ Stop animatie";
  } else {
    foundationVideo.pause();
    playFoundation.innerHTML = "▶️ Start animatie";
  }
}

var horecaVideo = document.getElementById("horecaVideo");
var playHoreca = document.getElementById("playHoreca");

function myFunction3() {
  if (horecaVideo.paused) {
    horecaVideo.play();
    playHoreca.innerHTML = "⏸ Stop animatie";
  } else {
    horecaVideo.pause();
    playHoreca.innerHTML = "▶️ Start animatie";
  }
}