/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let Pinta = ["♦", "♥", "♠", "♣"];
  let Numero = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const NUMERORAN = Numero[Math.floor(Math.random() * Numero.length)];
  const PINTARAN = Pinta[Math.floor(Math.random() * Pinta.length)];

  var frase = (document.getElementById("NUMEROCARTA").innerHTML = PINTARAN);
  var frase = (document.getElementById("NUMEROCARTA2").innerHTML = PINTARAN);
  var frase2 = (document.getElementById("sele").innerHTML = NUMERORAN);

  if (frase == "♥") {
    document.getElementById("lacarta").style.color = "#ff0000";
  }
  if (frase == "♦") {
    document.getElementById("lacarta").style.color = "#ff0000";
  }
};
